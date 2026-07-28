import { cn } from '@/lib/utils'

/**
 * The XM monogram: a crossed "X" beside a rounded "M", drawn as strokes so the
 * mark stays crisp at every size instead of shipping a raster logo.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
      className={cn('text-brand', className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* X — two crossing strokes, the lower-left one bowed outwards */}
        <path d="M11 15.5 C 16 21, 22 27, 25.5 33" />
        <path d="M25.5 15.5 C 21 21, 14 26, 11 33" />
        {/* M — straight stem, rounded shoulder, second stem */}
        <path d="M27.5 41 L 27.5 12.5" />
        <path d="M27.5 13.5 C 36 10.5, 43 17.5, 43 25.5 L 43 41" />
        <path d="M35.3 41 L 35.3 20" />
      </g>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="text-xl leading-none font-black tracking-tight whitespace-nowrap">
        <span className="text-white">BIL</span>
        <span className="text-zinc-400">VERKSTAD</span>
      </span>
    </span>
  )
}
