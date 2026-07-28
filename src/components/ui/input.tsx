import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full min-w-0 rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-2 text-base text-white shadow-xs transition-[color,box-shadow] outline-none placeholder:text-zinc-500 file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/40',
        'aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/30',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
