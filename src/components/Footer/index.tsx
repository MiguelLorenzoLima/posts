import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full pb-16 py-4 text-center text-sm text-gray-500'>
      <p>
        {' '}
        &copy; {new Date().getFullYear()} <Link href='/'>My Blog</Link>. All
        rights reserved.
      </p>
    </footer>
  );
}
