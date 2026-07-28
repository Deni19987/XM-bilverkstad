import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border whitespace-nowrap transition-colors [&>svg]:size-3 [&>svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-widest text-blue-400 uppercase',
        muted:
          'border-blue-500/20 bg-blue-900/30 px-3 py-1 text-sm font-bold tracking-wide text-blue-400 uppercase',
        outline: 'border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
