import clsx from 'clsx';

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoaderProps) {
  const classes = clsx('flex', 'items-center', 'justify-center', className);

  return (
    <div className={classes}>
      <div
        className={clsx(
          'w-10.5',
          'h-10.5',
          'border-4',
          'border-transparent',
          'text-blue-900',
          'text-4xl',
          'animate-spin',
          'flex',
          'items-center',
          'justify-center',
          'border-t-blue-900',
          'rounded-full',
        )}
      >
        <div
          className={clsx(
            'w-7',
            'h-7',
            'border-4',
            'border-transparent',
            'text-indigo-700',
            'text-2xl',
            'animate-spin',
            'flex',
            'items-center',
            'justify-center',
            'border-t-indigo-700',
            'rounded-full',
          )}
        ></div>
      </div>
    </div>
  );
}
