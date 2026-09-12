import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm text-center text-sm font-semibold text-balance transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-brand text-brand-ink hover:bg-brand-hover',
        destructive: 'bg-red-600 text-white hover:bg-red-500',
        outline:
          'border border-hairline-strong bg-transparent text-ink hover:border-ink-3 hover:text-white',
        secondary: 'bg-panel text-ink hover:bg-panel-hover',
        ghost: 'text-ink-2 hover:bg-panel hover:text-ink',
        light: 'bg-ink text-canvas hover:bg-white',
        link: 'text-brand underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-11 px-5 py-2.5',
        sm: 'min-h-9 px-3.5 py-2 text-[0.83rem]',
        lg: 'min-h-13 px-7 py-3 text-[0.95rem]',
        pill: 'min-h-11 px-6 py-2.5',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
