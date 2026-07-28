import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'

import { cn } from '@/lib/utils'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'aspect-square size-5 shrink-0 rounded-full border border-zinc-600 text-blue-600 shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-blue-600',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <Circle className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 fill-blue-500 text-blue-500" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
