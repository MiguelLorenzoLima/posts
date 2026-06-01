import { findPostBySlugCached } from '@/lib/post/queries';
import clsx from 'clsx';
import Image from 'next/image';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article>
      <header
        className={clsx(
          'min-h-70',
          'text-slate-900',
          'mb-16',
          'p-8',
          'rouded-xl',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'gap-6',
          'text-center',
        )}
      >
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
      </header>
    </article>
  );
}
