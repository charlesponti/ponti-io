import * as React from 'react';

import Seo from 'src/components/Seo';

export default function LandingPage() {
  return (
    <>
      <Seo />

      <main className='flex flex-1 flex-col'>
        <section className='flex flex-1 flex-col items-center justify-center text-center text-black'>
          <h1 className='mb-12 mt-4 text-[12rem] leading-[5rem]'>
            Ponti Studios
          </h1>
          <p className='text-md mb-3 mt-2'>We make dope shit.</p>
        </section>
      </main>
    </>
  );
}
