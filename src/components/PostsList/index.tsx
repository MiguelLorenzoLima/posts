import { postRepository } from '@/repositories/post';

export async function PostsList() {
  const post = await postRepository.findAll();

  return (
    <div>
      {post.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
