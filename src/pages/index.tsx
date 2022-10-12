import * as React from 'react';

import Layout from 'src/components/layout/Layout';
import UnderlineLink from 'src/components/links/UnderlineLink';
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
            <h1 className='mt-4 mb-1'>Ponti Studios</h1>
            <p className='mt-2 text-md mb-8'>
              The next-generation production company.
            </p>

            <button className='btn'>Click me</button>

            <footer className='absolute bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://twitter.com/thechaseponti'>
                @thechaseponti
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
