// ════════════════════════════════════════════════════════════
//  MENÚ DE B19 COFFEE BAR — ARCHIVO EDITABLE
//  Para actualizar precios, productos o etiquetas, edita SOLO
//  este archivo. El sitio se actualiza automáticamente.
//
//  Formato de precio por producto:
//    · Un solo tamaño:   single: 55
//    · Dos tamaños:      oz12: 50,  oz16: 55
//
//  Campos opcionales por producto:
//    · flavors: ['Vainilla', 'Caramelo', 'Avellana']  → deja elegir sabor
//    · tags:    ['Más pedido']                         → etiquetas destacadas
//    · limited: true                                   → "Disponibilidad limitada"
//
//  Etiquetas disponibles (colores automáticos):
//    'Más pedido' · 'Nuevo' · 'Recomendado' · 'Favorito' · 'Especial'
// ════════════════════════════════════════════════════════════

import {
  FaMugHot,
  FaLeaf,
  FaBlender,
  FaMortarPestle,
  FaBirthdayCake,
  FaTint,
} from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'

const FLAVORS = ['Vainilla', 'Caramelo', 'Avellana']

export const CATEGORIES = [
  {
    id: 'caliente',
    label: 'Café Caliente',
    icon: FaMugHot,
    note: 'Servidos en 16 oz. (473 ml)',
    items: [
      { name: 'Café Americano', desc: 'Espresso de origen mexicano, aromático y de cuerpo limpio.', single: 55 },
      { name: 'Latte clásico', desc: 'Espresso con leche caliente y una corona de espuma sedosa.', single: 70, tags: ['Favorito'] },
      { name: 'Latte con sabor', desc: 'Vainilla, caramelo o avellana sobre nuestro latte de la casa.', single: 80, flavors: FLAVORS },
      { name: 'Caramel Macchiato', desc: 'Capas de leche vaporizada, espresso y caramelo tostado.', single: 90, tags: ['Más pedido'] },
      { name: 'Cappuccino clásico', desc: 'Balance perfecto de espresso, leche y espuma aterciopelada.', single: 70 },
      { name: 'Cappuccino con sabor', desc: 'Vainilla, caramelo o avellana para consentir tu antojo.', single: 80, flavors: FLAVORS },
    ],
  },
  {
    id: 'frio',
    label: 'Café Frío',
    icon: FiCoffee,
    items: [
      { name: 'Café Americano frío', desc: 'Refrescante y equilibrado, servido sobre hielo.', oz12: 50, oz16: 55 },
      { name: 'Latte frío clásico', desc: 'Espresso y leche fría en su versión más cremosa.', oz12: 60, oz16: 70 },
      { name: 'Latte frío con sabor', desc: 'Vainilla, caramelo o avellana bien fríos.', oz12: 70, oz16: 80, flavors: FLAVORS },
      { name: 'Caramel Macchiato frío', desc: 'Caramelo, leche fría y espresso en capas irresistibles.', oz12: 80, oz16: 90 },
      { name: 'Crunch Latte', desc: 'Latte frío con un crocante toque de galleta y caramelo.', oz12: 105, oz16: 125, tags: ['Nuevo'] },
      { name: 'Horchata Latte', desc: 'La dulzura de la horchata mexicana unida al espresso.', oz12: 75, oz16: 85, tags: ['Recomendado'] },
    ],
  },
  {
    id: 'frappes',
    label: 'Frappés',
    icon: FaBlender,
    items: [
      { name: 'Regular', desc: 'Nuestro frappé de café clásico, cremoso y helado.', oz12: 65, oz16: 75 },
      { name: 'Caramel Frappé', desc: 'Café licuado con caramelo y crema batida.', oz12: 72, oz16: 85 },
      { name: 'Avellana Frappé', desc: 'Frappé de café con el aroma tostado de la avellana.', oz12: 72, oz16: 85 },
      { name: 'Frappé Chai', desc: 'Especias chai licuadas en un frappé reconfortante.', oz12: 95, oz16: 105 },
      { name: 'Matcha Frappé', desc: 'Matcha ceremonial batido y helado, vibrante y suave.', oz12: 105, oz16: 115, tags: ['Más pedido'] },
      { name: 'Horchata Latte Frappé', desc: 'Horchata y café licuados en un abrazo helado.', oz12: 75, oz16: 85 },
    ],
  },
  {
    id: 'matcha',
    label: 'Matcha',
    icon: FaLeaf,
    items: [
      { name: 'Matcha Latte', desc: 'Matcha ceremonial con leche vaporizada, terroso y dulce.', oz12: 90, oz16: 110, tags: ['Favorito'] },
      { name: 'Matcha Horchata', desc: 'El encuentro de matcha y horchata en perfecta armonía.', oz12: 95, oz16: 115 },
      { name: 'Cheesecake Matcha', desc: 'Matcha cremoso con notas de cheesecake, todo un postre.', oz12: 120, oz16: 145, tags: ['Especial'] },
    ],
  },
  {
    id: 'chai',
    label: 'Chai',
    icon: FaMortarPestle,
    items: [
      { name: 'Chai Latte', desc: 'Té chai especiado con leche vaporizada y canela.', oz12: 80, oz16: 90 },
      { name: 'Dirty Chai', desc: 'Chai latte con un shot de espresso para más carácter.', oz12: 90, oz16: 100, tags: ['Recomendado'] },
    ],
  },
  {
    id: 'sincafe',
    label: 'Sin Café',
    icon: FaTint,
    items: [
      { name: 'Jamaica Tonic', desc: 'Flor de jamaica y agua tónica, burbujeante y refrescante.', single: 60 },
      { name: 'Horchata Frappé', desc: 'Horchata mexicana licuada y helada, sin café.', single: 70 },
      { name: 'Horchata Refresca', desc: 'Horchata fresca servida sobre hielo.', single: 55 },
      { name: 'Agua Natural', desc: 'Agua purificada para acompañar tu visita.', single: 10 },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    icon: FaBirthdayCake,
    limited: true,
    items: [
      { name: 'Flan Casero', desc: 'Flan cremoso hecho en casa con caramelo dorado.', single: 40, limited: true },
    ],
  },
]

// Estilo de color por etiqueta (usado en las tarjetas del menú)
export const TAG_STYLES = {
  'Más pedido': 'bg-[#E0A82E]/15 text-[#9A6B00]',
  Nuevo: 'bg-forest/15 text-forest',
  Recomendado: 'bg-espresso/10 text-espresso',
  Favorito: 'bg-[#E0A82E]/15 text-[#9A6B00]',
  Especial: 'bg-forest/15 text-forest',
}
