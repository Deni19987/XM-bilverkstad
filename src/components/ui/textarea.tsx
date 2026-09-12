import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex field-sizing-content min-h-24 w-full rounded-xl border border-hairline-strong bg-canvas-2/60 px-4 py-3 text-base text-white shadow-xs transition-[color,box-shadow] outline-none placeholder:text-ink-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40',
        'aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/30',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
