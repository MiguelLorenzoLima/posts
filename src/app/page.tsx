import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList/index';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Foooter</p>
      </footer>
    </Container>
  );
}
