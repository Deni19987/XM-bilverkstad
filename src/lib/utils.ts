import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('sv-SE').format(value)
}
