// ════════════════════════════════════════════════════════════
//  IMÁGENES DEL SITIO
//  Guarda tus fotos reales en la carpeta  public/gallery/  con
//  estos nombres exactos y aparecerán automáticamente. Mientras
//  no existan, el sitio usa una imagen temporal (fallback) para
//  que nunca se vea roto.
//
//  El logo va en  public/logo.png  (fondo transparente de
//  preferencia).
// ════════════════════════════════════════════════════════════

// Foto grande de la sección "Nosotros" (recomendado: latte / barra).
export const ABOUT_PHOTO = {
  src: '/gallery/nosotros.jpg',
  fallback:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=70',
  alt: 'Barista preparando un café de especialidad en B19 Coffee Bar',
}

// Galería "Un vistazo a B19". Puedes tener de 3 a 6 fotos.
export const GALLERY = [
  {
    src: '/gallery/bebidas.jpg',
    fallback:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=70',
    alt: 'Bebidas de especialidad de B19 Coffee Bar',
  },
  {
    src: '/gallery/latte.jpg',
    fallback:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=70',
    alt: 'Arte latte servido en taza',
  },
  {
    src: '/gallery/comunidad.jpg',
    fallback:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=70',
    alt: 'Cliente disfrutando una bebida de B19 al aire libre',
  },
  {
    src: '/gallery/barista.jpg',
    fallback:
      'https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=800&q=70',
    alt: 'Barista de B19 vertiendo leche vaporizada',
  },
  {
    src: '/gallery/espresso.jpg',
    fallback:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=70',
    alt: 'Preparación de espresso en la barra',
  },
  {
    src: '/gallery/postre.jpg',
    fallback:
      'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=70',
    alt: 'Repostería artesanal de B19',
  },
]
