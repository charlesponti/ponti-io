import * as React from 'react';

import Services from 'src/components/landing/Services';
import Layout from 'src/components/layout/Layout';
import Seo from 'src/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <header
        className='layout flex items-center py-2 md:w-[700px]'
        data-testid='navbar'
      >
        <span className='text-neutral-content font-bold text-3xl'>
          Ponti Studios
        </span>
      </header>
      <main>
        <div className='layout flex min-h-screen flex-col md:w-[700px]'>
          {/* Hero */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mt-9 mb-9'>
            <div className='p-8 pb-11'>
              <h1 className='mb-6 text-3xl text-indigo-500'>
                The next-generation production company.
              </h1>
              <p className='text-lg md:text-xl text-primary-content'>
                We build products people love.{' '}
                <span className='font-semibold'>Period.</span>
              </p>
              <p className='mt-4 text-primary-content'>
                We're a team of international engineers, designers, and data
                scientists <b>obsessed</b> with moving the ball forward.
              </p>
              <p className='mt-4 text-primary-content'>
                We use{' '}
                <b>
                  <i>
                    design thinking, machine learning, and exploratory data
                    analysis
                  </i>
                </b>{' '}
                to meticulously build{' '}
                <span className='font-semibold'>customer-focused</span>{' '}
                solutions that enable <b>humans</b> to achieve exponential
                growth.
              </p>
            </div>
          </div>
          <Services />
        </div>
      </main>
    </Layout>
  );
}
