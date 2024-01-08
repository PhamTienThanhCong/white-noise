import { tv } from 'tailwind-variants'

export const toggleButton = tv({
  base: /*tw:*/ ' hover:opacity-80 opacity-50',
  variants: {
    enabled: {
      true: /*tw:*/ 'opacity-100'
    },
    theme: {
      transition: /*tw:*/ 'text-white',
      dark: /*tw:*/ 'text-dark-foreground',
      light: /*tw:*/ 'text-light-foreground',
      'blue-room': /*tw:*/ 'text-blue-room',
      train: /*tw:*/ 'text-train',
      waterfall: /*tw:*/ 'text-waterfall',
      'camping-fire': /*tw:*/ 'text-camping-fire'
    }
  }
})
