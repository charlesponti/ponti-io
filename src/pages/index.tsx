import * as React from 'react';

import Layout from 'src/components/layout/Layout';
import Seo from 'src/components/Seo';

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
          </div>
        </section>
      </main>
    </Layout>
  );
}
