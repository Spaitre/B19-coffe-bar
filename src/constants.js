// Central business data & links for B19 Coffee Bar
export const BUSINESS = {
  name: 'B19 Coffee Bar',
  tagline: 'Apasionados por el café y el servicio',
  phoneDisplay: '686 514 6876',
  phoneTel: 'tel:6865146876',
  email: 'B19coffebar@gmail.com',
  address: 'Av. Juan Aldama 785, Col. Magisterial, Mexicali, Baja California, México. C.P. 21290',
  addressShort: 'Av. Juan Aldama 785, Col. Magisterial, Mexicali, B.C.',
}

export const WHATSAPP =
  'https://wa.me/526865146876?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20B19%20Coffee%20Bar%20%F0%9F%8D%B5'

// Genera un enlace de WhatsApp con un mensaje personalizado.
export function waLink(text) {
  return 'https://wa.me/526865146876?text=' + encodeURIComponent(text)
}

export const MAPS =
  'https://www.google.com/maps/search/?api=1&query=B19+Coffee+Bar+Av.+Juan+Aldama+785+Col.+Magisterial+Mexicali'

// Enlace para dejar reseña en Google. Abre la ficha del negocio en Maps.
// Para que abra directo el formulario de reseña, reemplázalo por:
// https://search.google.com/local/writereview?placeid=TU_PLACE_ID
export const GOOGLE_REVIEW =
  'https://www.google.com/maps/search/?api=1&query=B19+Coffee+Bar+Mexicali'

export const SOCIALS = {
  instagram: 'https://www.instagram.com/b19coffeebar.mxl/',
  facebook: 'https://www.facebook.com/B19COFFEEBAR/',
  tiktok: '#',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú', href: '#menu' },
  { label: 'Promos', href: '#promos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]
