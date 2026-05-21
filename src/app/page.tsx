import { Container } from '@/components/container';
import { PostsList } from '@/components/PostsList/index';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Liluiaaaa</h1>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          praesentium possimus veniam nisi totam repellat ut obcaecati,
          consequuntur error explicabo impedit rem necessitatibus autem dolores.
          Laudantium deleniti iste nulla veritatis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laborum, praesentium possimus veniam
          nisi totam repellat ut obcaecati, consequuntur error explicabo impedit
          rem necessitatibus autem dolores. Laudantium deleniti iste nulla
          veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum, praesentium possimus veniam nisi totam repellat ut obcaecati,
          consequuntur error explicabo impedit rem necessitatibus autem dolores.
          Laudantium deleniti iste nulla veritatis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laborum, praesentium possimus veniam
          nisi totam repellat ut obcaecati, consequuntur error explicabo impedit
          rem necessitatibus autem dolores. Laudantium deleniti iste nulla
          veritatis?
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Foooter</p>
      </footer>
    </Container>
  );
}
