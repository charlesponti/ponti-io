import Link from 'next/link';
import * as React from 'react';

import Layout from 'src/components/layout/Layout';
import Seo from 'src/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4 mb-1 text-neutral-content'>Ponti Studios</h1>
            <p className='mt-2 text-md mb-3'>
              The next-generation production company.
            </p>

            <footer className='absolute bottom-2'>
              <span className='text-accent-content'>
                © {new Date().getFullYear()}
              </span>{' '}
              by{' '}
              <Link
                className='text-neutral-content'
                href='https://twitter.com/thechaseponti'
              >
                @thechaseponti
              </Link>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
