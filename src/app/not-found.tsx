import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-80  text-slate-900',
        'mb-16 p-8 rouded-xl',
        'flex flex-col items-center justify-center gap-4',
        'text-center',
      )}
    >
      <div>
        <h1 className='text-8xl/tight mb-4 font-extrabold'>404</h1>
        <p className='text-2xl'>Page not found - This Page Does Not Exist</p>
      </div>
    </div>
  );
}
