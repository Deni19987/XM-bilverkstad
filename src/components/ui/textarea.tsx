import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex field-sizing-content min-h-24 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-base text-white shadow-xs transition-[color,box-shadow] outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/40',
        'aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/30',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
