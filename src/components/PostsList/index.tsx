import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const post = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16'>
      {post.map(post => (
        <div className='flex flex-col group gap-4' key={post.id}>
          <PostCoverImage
            linkProps={{
              href: `/posts/${post.slug}`,
            }}
            imageProps={{
              src: post.coverImageUrl,
              width: 1200,
              height: 720,
              alt: post.title,
            }}
          />

          <div className='flex flex-col gap-4 justify-center'>
            <PostHeading as='h2' url={`/posts/${post.slug}`}>
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
            <time
              className='text-slate-600 text-sm/tight'
              dateTime={post.createdAt}
            >
              {post.createdAt}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
}
