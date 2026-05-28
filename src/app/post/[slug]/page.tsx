import { findPostBySlugCached } from '@/lib/post/queries';
import clsx from 'clsx';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div
      className={clsx(
        'min-h-70  text-slate-900',
        'mb-16 p-8 rouded-xl',
        'flex flex-col items-center justify-center gap-6',
        'text-center',
      )}
    >
      <p className='text-7xl font-extrabold py-16'>{post.slug}</p>
    </div>
  );
}
