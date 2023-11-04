import * as React from 'react';

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
          <section className='flex flex-col py-[50px]'>
            <h1 className='mb-6 text-2xl'>
              The next-generation production company.
            </h1>
            <p className='text-lg md:text-xl'>
              We build products people love.{' '}
              <span className='font-semibold'>Period.</span>
            </p>
          </section>
          <section className='flex flex-col gap-4 py-6 mb-[50px] text-lg md:text-base'>
            <p>
              We're a team of international engineers, designers, and data
              scientists <b>obsessed</b> with moving the ball forward.
            </p>
            <p>
              We use{' '}
              <b>
                <i>
                  design thinking, machine learning, and exploratory data
                  analysis
                </i>
              </b>{' '}
              to meticulously build{' '}
              <span className='font-semibold'>customer-focused</span> solutions
              that enable <b>humans</b> to achieve exponential growth.
            </p>
          </section>
          <section className='flex flex-col gap-4 py-6 card w-full'>
            <p>
              We're currently accepting new clients, but are <b>extremely</b>{' '}
              selective.{' '}
            </p>
            <p>
              <a href='mailto:cj@ponti.io' className='underline'>
                Tell us what you're working on.
              </a>
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
