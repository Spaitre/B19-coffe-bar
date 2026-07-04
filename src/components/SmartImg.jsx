import { useState } from 'react'

// Muestra `src`; si falla la carga (archivo aún no existe), usa `fallback`.
export default function SmartImg({ src, fallback, alt = '', className = '', ...rest }) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback)
      }}
      className={className}
      {...rest}
    />
  )
}
