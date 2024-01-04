import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Head from 'next/head';
import Providers from '../utils/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ponti Studios',
  description: 'A next-generation production studio for random ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className={inter.className}>
        <nav className='mb-8 text-black font-mono font-semibold p-4'>
          <a href='/'>Ponti Studios</a>
        </nav>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
