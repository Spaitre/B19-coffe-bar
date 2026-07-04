import { useBusinessStatus } from '../hooks/useBusinessStatus.js'

// Insignia de estado en vivo "Abierto ahora / Cerrado".
// variant: 'light' (sobre fondo oscuro) | 'dark' (sobre fondo claro)
export default function OpenStatus({ variant = 'dark', showDetail = true }) {
  const { isOpen, label, detail } = useBusinessStatus()

  const container =
    variant === 'light'
      ? 'border-cream/20 bg-cream/10 text-cream'
      : 'border-espresso/10 bg-white text-espresso'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${container}`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {isOpen && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isOpen ? 'bg-green-500' : 'bg-red-400'
          }`}
        />
      </span>
      <span className="font-semibold">{label}</span>
      {showDetail && detail && (
        <span className={variant === 'light' ? 'text-cream/70' : 'text-muted'}>
          · {detail}
        </span>
      )}
    </span>
  )
}
