import clsx from 'clsx';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <div
      className={clsx(
        'min-h-70  text-slate-900',
        'mb-16 p-8 rouded-xl',
        'flex flex-col items-center justify-center gap-6',
        'text-center',
      )}
    >
      <h1 className='text-7xl font-extrabold py-16'>Post Page{slug}</h1>
    </div>
  );
}
