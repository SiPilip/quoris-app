import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatIDR(amount) {
  return (
    'Rp. ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
  );
}
