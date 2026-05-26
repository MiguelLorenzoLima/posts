import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Gerenciador de Posts',
    template: '%s | The Blog',
  },
  description: 'Blog descripition',
};
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />
          {children}

          <footer>
            <p className='text-6xl font-bold text-center py-8'>Foooter</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
