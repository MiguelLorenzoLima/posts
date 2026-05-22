import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList/index';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { PostHeading } from '@/components/PostHeading';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority // quando aparecer na primeira dobra da pagina, o next vai carregar ela com prioridade
          />
        </Link>
        <div className='flex flex-col gap-4 justify-center'>
          <PostHeading as='h1' url='#'>
            harum blanditiis mollitia?
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
          <time className='text-slate-600 text-sm/tight' dateTime='2026-05-21'>
            21/05/2026 10:00
          </time>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Foooter</p>
      </footer>
    </Container>
  );
}
