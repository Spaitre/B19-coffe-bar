// ════════════════════════════════════════════════════════════
//  HORARIO DE B19 COFFEE BAR — ARCHIVO EDITABLE
//  Para cambiar el horario, edita SOLO este archivo.
//  El indicador "Abierto / Cerrado" y la lista de horarios en la
//  sección de Contacto se actualizan automáticamente.
//
//  Formato de la hora:  '7:30 AM'  '10:00 PM'  '12:00 PM' (mediodía)
//  Día cerrado:         pon  null   en vez de { abre, cierra }
//    Ejemplo:           lunes: null,
// ════════════════════════════════════════════════════════════

export const HOURS = {
  lunes: { abre: '7:30 AM', cierra: '10:00 PM' },
  martes: { abre: '7:30 AM', cierra: '10:00 PM' },
  miercoles: { abre: '7:30 AM', cierra: '10:00 PM' },
  jueves: { abre: '7:30 AM', cierra: '10:00 PM' },
  viernes: { abre: '7:30 AM', cierra: '10:00 PM' },
  sabado: { abre: '7:30 AM', cierra: '10:00 PM' },
  domingo: { abre: '5:00 PM', cierra: '9:00 PM' },
}

// Zona horaria del negocio. Mexicali = Pacífico (con horario de verano).
export const TIMEZONE = 'America/Tijuana'
