const _sections = [
  {
    url: '/services',
    title: 'Services',
    description: 'How we can help you.',
  },
  {
    newTab: true,
    url: 'https://rocco.ponti.io',
    title: 'Rocco',
    description: 'Save, track, and discover the best places on Earth.',
  },
  {
    url: '/tfl',
    title: 'TFL Cameras',
    description: 'The cameras in the Transport for London network.',
  },
  // {
  //   url: "/corona",
  //   title: "Corona",
  //   description: "Learn about Next.js in an interactive course with quizzes!",
  // },
];

const _Section = ({
  newTab = false,
  url,
  title,
  description,
}: {
  newTab?: boolean;
  url: string;
  title: string;
  description: string;
}) => (
  <a
    href={url}
    {...(newTab ? { target: '_blank' } : {})}
    rel='noopener noreferrer'
    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
  >
    <h2 className='mb-3 text-4xl font-semibold'>
      {title}{' '}
      <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
        -&gt;
      </span>
    </h2>
    <p className='m-0 max-w-[30ch] text-sm opacity-50'>{description}</p>
  </a>
);

export default function Home() {
  return (
    <div className='container flex flex-col max-w-[800px]'>
      {/* Hero */}
      <div className='flex flex-col justify-center min-h-[75vh] p-4 mb-16'>
        <div
          className='bg-primary overflow-hidden max-w-3xl'
          style={{ textWrap: 'pretty' }}
        >
          <p className='mt-4 text-primary text-fluid-1 leading-fluid-2'>
            <b className='text-slate-400'>Lovable</b> technology for{' '}
            <b className='text-slate-400'>humans</b>.
          </p>
          <p className='text-primary mt-6 text-lg md:text-xl'>
            We're a diverse team of international designers and technologists
            using <i>humanity-centered design</i> and <i>data science</i> to
            produce efficient and effective solutions that solve <i>sticky</i>{' '}
            problems.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center p-4 bg-black text-white mb-24 pt-8 pb-12'>
        <h2 className='mb-fluid-2 text-fluid-2'>Services</h2>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col justify-center flex-1 font-light'>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3'>
              Product Feasbility & Workshops
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3'>
              Design & Engineering
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3'>
              Branding & Marketing
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3'>
              Events & Experienes
            </p>
            <p className='text-2xl md:text-4xl text-slate-600 mb-1 md:mb-3'>
              Social Media & Community
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center px-4 py-24 mb-24 border-[1px] border-slate-100'>
        <div className='flex flex-col justify-center flex-1 text-2xl md:text-3xl lg:text-4xl font-light'>
          We partner with clients across communications, brand design and
          consulting, experience design, technology strategy and engineering,
          media planning and buying, and relationship design.
          {/* See how we can help */}
        </div>
      </div>
    </div>
  );
}
