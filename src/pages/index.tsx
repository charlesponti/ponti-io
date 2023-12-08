import * as React from 'react';

import Services from 'src/components/landing/Services';
import Layout from 'src/components/layout/Layout';
import Seo from 'src/components/Seo';

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className='bg-white rounded-lg shadow-lg overflow-hidden my-9 p-8'>
    {children}
  </div>
);

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
          <Section>
            {/* <h1 className='mb-6 text-3xl text-indigo-500'>
                The next-generation production company.
              </h1> */}
            <p className='text-lg md:text-4xl text-primary-content font-semibold mt-4'>
              We don't just build products.{' '}
            </p>
            <p className='text-lg md:text-3xl mt-2 text-primary-content font-semibold'>
              We build solutions people{'   '}
              <span className='font-extrabold'>love.</span>
            </p>
            <p className='text-primary-content mt-8'>
              We're a team of international engineers, designers, and data
              scientists who use{' '}
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
          </Section>
          <Services />
        </div>
      </main>
    </Layout>
  );
}
