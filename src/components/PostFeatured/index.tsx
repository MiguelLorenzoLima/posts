import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'harum-blanditiis-mollitia';
  const postLink = `/posts/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: '/images/bryen_9.png',
          width: 1200,
          height: 720,
          alt: 'Título do post',
          priority: true,
        }}
      />

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt='2026-05-21T10:00:00Z'
        title='harum blanditiis mollitia?'
        excerpt='Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit dolorem est dolor porro, doloribus neque, quidem mollitia doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis mollitia?'
      />
    </section>
  );
}
