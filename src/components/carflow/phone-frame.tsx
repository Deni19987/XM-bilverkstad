import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * A phone shell for the CarFlow portal mockups. The screen renders the portal
 * in its own light theme, the way the customer actually sees it on their
 * phone, against this site's dark canvas.
 */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode
  className?: string
  /** Screen-reader description of what the mockup shows. */
  label: string
}) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[320px]', className)}>
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-blue-600/20 via-blue-600/5 to-transparent blur-2xl" />

      <div className="rounded-[2.5rem] border border-zinc-700/80 bg-zinc-800 p-2.5 shadow-2xl shadow-black/60">
        <div
          role="img"
          aria-label={label}
          className="relative overflow-hidden rounded-[2rem] bg-white"
        >
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-6 pt-3 pb-1 text-[11px] font-semibold text-zinc-900">
            <span>09:41</span>
            <span className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-900" />
            <span className="flex items-center gap-1">
              <SignalIcon />
              <BatteryIcon />
            </span>
          </div>

          <div className="h-[580px] overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  )
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 18 12" className="h-3 w-4 fill-zinc-900" aria-hidden="true">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="5" y="5" width="3" height="7" rx="1" />
      <rect x="10" y="2" width="3" height="10" rx="1" />
      <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 26 12" className="h-3 w-6" aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        width="22"
        height="11"
        rx="3"
        className="fill-none stroke-zinc-900"
        strokeOpacity="0.4"
      />
      <rect x="2" y="2" width="16" height="8" rx="1.5" className="fill-zinc-900" />
      <rect x="24" y="4" width="2" height="4" rx="1" className="fill-zinc-900/40" />
    </svg>
  )
}
