'use client';
import clsx from 'clsx';

export function Header() {
  return (
    <h1
      className={clsx(
        'text-6xl',
        'font-bold',
        'text-pink-500',
        'hover:text-pink-400', // cslx meu salvador!
        'hover:bg-pink-700',
        'transition',
        'duration-600',
      )}
    >
      Hello world
    </h1>
  );
}
