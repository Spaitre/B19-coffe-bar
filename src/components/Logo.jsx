import { useState } from 'react'

// Logo circular de B19. Usa /logo.png si existe; si no, dibuja un
// respaldo vectorial en los colores de la marca.
export default function Logo({ className = 'h-10 w-10' }) {
  const [err, setErr] = useState(false)

  if (!err) {
    return (
      <img
        src="/logo.png"
        alt="B19 Coffee Bar"
        onError={() => setErr(true)}
        className={`${className} object-contain`}
      />
    )
  }

  // Respaldo vectorial (mientras no exista /logo.png)
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="B19 Coffee Bar">
      <circle cx="120" cy="120" r="118" fill="#231712" />
      <circle cx="120" cy="120" r="106" fill="none" stroke="#C9A24B" strokeWidth="2.5" />
      {/* Retícula hexagonal estilo molécula */}
      <g stroke="#E8DFC8" strokeWidth="2" fill="none" opacity="0.9">
        <polygon points="150,150 168,140 186,150 186,170 168,180 150,170" />
        <line x1="186" y1="150" x2="204" y2="140" />
        <circle cx="204" cy="140" r="3.5" fill="#E8DFC8" stroke="none" />
        <circle cx="150" cy="170" r="3.5" fill="#fff" stroke="none" />
      </g>
      {/* Grano de café */}
      <g fill="#F5ECD7">
        <ellipse cx="176" cy="98" rx="12" ry="8" transform="rotate(-30 176 98)" />
        <path d="M170 94 q6 4 12 8" stroke="#231712" strokeWidth="1.4" fill="none" />
        <circle cx="196" cy="92" r="4" />
      </g>
      {/* Letra B */}
      <text
        x="86"
        y="150"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="118"
        fontWeight="800"
        fill="#F5ECD7"
      >
        B
      </text>
      {/* 19 */}
      <text
        x="167"
        y="166"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="#F5ECD7"
      >
        19
      </text>
      {/* COFFEE BAR */}
      <text
        x="120"
        y="200"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        letterSpacing="4"
        fill="#F5ECD7"
      >
        COFFEE
      </text>
      <text
        x="120"
        y="216"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        letterSpacing="5"
        fill="#C9A24B"
      >
        BAR
      </text>
    </svg>
  )
}
