import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <>
      <title>Page Not Found</title>

      <div
        className={clsx(
          'min-h-70  text-slate-900',
          'mb-16 p-8 rouded-xl',
          'flex flex-col items-center justify-center gap-6',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-8xl/tight mb-4 font-extrabold '>404</h1>
          <p className='text-2xl'>Page not found - This Page Does Not Exist</p>
        </div>
      </div>
    </>
  );
}
