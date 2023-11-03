import * as React from 'react';

import Layout from 'src/components/layout/Layout';
import Seo from 'src/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col'>
            {/* Hero */}
            <div className='flex items-center py-2' data-testid='navbar'>
              <span className='text-neutral-content font-bold text-lg'>
                Ponti Studios
              </span>
            </div>
            <div className='md:flex md:flex-col md:items-center'>
              <div className='flex flex-col pt-[100px] pb-[50px] bg-white bg-opacity-0 text-white rounded-lg md:max-w-lg'>
                <h1 className='mb-6 text-2xl'>
                  The next-generation production company.
                </h1>
                <p className='text-lg md:text-xl font-light'>
                  We use <span className='font-serif'>design thinking</span>,{' '}
                  <span className='font-mono text-base'>machine learning</span>,
                  and exploratory data analysis to build{' '}
                  <span className='font-semibold'>customer-focused</span>{' '}
                  products people love.
                </p>
              </div>
              <hr className='pb-[25px] md:hidden' />
              <div className='flex flex-col text-base gap-4 py-6 md:max-w-lg'>
                <p>
                  As a growth agency, we meticulously design solutions for
                  businesses to achieve exponential growth.
                </p>
                <p>
                  When it comes to growth, <b>we never take it slow</b>.
                </p>
                <p>
                  We're a team of international engineers, designers, and data
                  scientists <b>obsessed</b> with innovation.
                </p>
                <p>
                  We're currently accepting new clients, but are{' '}
                  <b>extremely</b> selective.{' '}
                </p>
                <p>
                  <a href='mailto:cj@ponti.io' className='underline'>
                    So, tell us what you're working on.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
