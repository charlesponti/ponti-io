import * as React from 'react';

import Seo from 'src/components/Seo';

export default function LandingPage() {
  return (
    <>
      <Seo />

      <main className='flex-1 flex flex-col'>
        <section className='flex-1 flex flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-4 mb-12 text-[12rem] leading-[5rem]'>
            Ponti Studios
          </h1>
          <p className='mt-2 text-md mb-3'>We make dope shit.</p>
        </section>
      </main>
    </>
  );
}
