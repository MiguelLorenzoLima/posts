import { findPostBySlugCached } from '@/lib/post/queries';
import clsx from 'clsx';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import { SafeMarkdown } from '../SafeMarkedown';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className='mb-16'>
      <header
        className={clsx(
          'text-slate-900',
          'mb-16',
          'rouded-xl',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'gap-4',
          'text-center',
        )}
      >
        <Image
          className='w-full h-auto rounded-xl'
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
        <PostHeading url={`/post/${post.slug}`}> {post.title} </PostHeading>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <SafeMarkdown markedown={post.content} />
    </article>
  );
}
