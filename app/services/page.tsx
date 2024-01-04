import * as React from 'react';

import Services from '@/components/landing/Services';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Section = ({ children }: React.PropsWithChildren) => (
  <div className='bg-primary rounded-lg shadow-lg overflow-hidden my-9 p-8'>
    {children}
  </div>
);

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className='layout flex min-h-screen flex-col md:w-[700px]'>
          {/* Hero */}
          <Section>
            {/* <h1 className='mb-6 text-3xl text-indigo-500'>
                The next-generation production company.
              </h1> */}
            <p className='text-lg md:text-4xl text-primary font-semibold mt-4'>
              We don't just build products.{' '}
            </p>
            <p className='text-lg md:text-3xl mt-2 text-primary font-semibold'>
              We build solutions people{'   '}
              <span className='font-extrabold'>love.</span>
            </p>
            <p className='text-primary mt-8'>
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
