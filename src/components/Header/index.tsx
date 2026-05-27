import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <h1
      className={clsx(
        'text-5xl/normal font-extrabold py-8',
        'sm:text-6xl/normal sm:font-extrabold sm:py-10',
        'md:text-7xl/normal md:font-extrabold md:py-11',
        'lg:text-8xl/normal lg:font-extrabold lg:py-12',
      )}
    >
      <Link href='/'>The Blog</Link>
    </h1>
  );
}
