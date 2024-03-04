import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const GradialCard = ({
  children,
  className,
}: PropsWithChildren & {
  className?: string;
}) => (
  <div
    className={twMerge(
      `flex flex-col justify-center w-part-full min-h-[75vh] px-4 mb-16 shadow-md bg-gradient-radial rounded-2xl`,
      className,
    )}
    style={{ textWrap: 'balance' }}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className='container flex flex-col items-center w-full max-w-[1200px] gap-6'>
      <GradialCard className='from-slate-200 to-white'>
        <p className='text-primary text-fluid-1 leading-fluid-2 md:text-center font-thin opacity-75 uppercase whitespace-pre-wrap'>
          <span className='text-slate-800'>Lovable</span> technology for{' '}
          <span className='text-slate-800'>humans</span>.
        </p>
      </GradialCard>
      <GradialCard className='from-slate-200 to-white'>
        <p className='text-primary text-lg md:text-4xl w-[90%] font-thin'>
          We're a diverse team of international designers and technologists
          using <i>humanity-centered design</i> and <i>data science</i> to
          produce efficient and effective solutions that solve <i>sticky</i>{' '}
          problems.
        </p>
      </GradialCard>
      <GradialCard className='from-slate-200 to-white'>
        <h2 className='mb-fluid-2 text-fluid-2'>Services</h2>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col justify-center flex-1 font-light gap-3'>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3 font-light'>
              Product Feasbility & Workshops
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3 font-light'>
              Design & Engineering
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3 font-light'>
              Branding & Marketing
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3 font-light'>
              Events & Experienes
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3 font-light'>
              Social Media & Community
            </p>
          </div>
        </div>
      </GradialCard>
      <GradialCard className='from-slate-200 to-white'>
        <p className='text-primary text-lg md:text-4xl w-[90%] font-thin'>
          We partner with clients across communications, brand design and
          consulting, experience design, technology strategy and engineering,
          media planning and buying, and relationship design.
          {/* See how we can help */}
        </p>
      </GradialCard>
    </div>
  );
}
