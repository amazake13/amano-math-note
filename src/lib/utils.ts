import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const pathJoin = (path: string, subPath: string) => {
  return (
    '/' +
    path
      .split('/')
      .concat(subPath.split('/'))
      .filter((p) => p)
      .join('/')
  )
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
