import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Mandatory className merger — never concatenate Tailwind classes by hand. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
