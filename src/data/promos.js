// ════════════════════════════════════════════════════════════
//  PROMOCIONES DE B19 COFFEE BAR — ARCHIVO EDITABLE
//  Para cambiar las promos edita SOLO este archivo (o conéctalo a
//  una pestaña "Promos" de Google Sheets — ver sheets.config.js).
//
//  Campos por promoción:
//    titulo      : nombre de la promo (obligatorio)
//    descripcion : una línea que explique la promo
//    etiqueta    : texto corto arriba (ej. "Cada martes", "Temporada")
//    destacado   : 'si' para resaltarla en grande (usa solo 1)
//    activo      : 'no' para ocultarla sin borrarla (vacío = visible)
//
//  ⚠ Estas son promos de EJEMPLO. Reemplázalas o bórralas por las
//  reales. Si no hay ninguna activa, el apartado se oculta solo.
// ════════════════════════════════════════════════════════════

export const PROMOS = [
  {
    titulo: 'Martes de 2x1 en Frappés',
    descripcion: 'Todos los martes, pide un frappé y el segundo va por nuestra cuenta.',
    etiqueta: 'Cada martes',
    destacado: 'si',
    activo: 'si',
  },
  {
    titulo: 'Bebida de temporada',
    descripcion: 'Prueba nuestro Strawberry White Mocha por tiempo limitado.',
    etiqueta: 'Temporada',
    destacado: '',
    activo: 'si',
  },
  {
    titulo: 'Combo mañanero',
    descripcion: 'Café de la casa + pieza de repostería a precio especial de 7:30 a 10 AM.',
    etiqueta: 'Entre semana',
    destacado: '',
    activo: 'si',
  },
]
