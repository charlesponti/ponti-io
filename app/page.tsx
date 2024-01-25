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
    <main className='flex flex-col justify-between items-center'>
      <div className='container flex flex-col'>
        {/* Hero */}
        <div className='flex flex-col justify-center h-[350px] p-4 mb-16'>
          <div
            className='bg-primary overflow-hidden max-w-3xl'
            style={{ textWrap: 'pretty' }}
          >
            <p className='text-4xl md:text-6xl mt-4 text-primary lg:text-5xl lg:leading-[3.5rem]'>
              We build <b className='text-slate-400'>lovable</b> technology for{' '}
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
          <h2 className='text-6xl md:text-8xl mb-8'>Services</h2>
          <div className='flex flex-col gap-4 lg:flex-row lg:space-between'>
            <div className='flex flex-col justify-center flex-1 font-light'>
              <p className='text-4xl lg:text-4xl text-slate-600 mb-1 md:mb-3'>
                Ideation & MVPs
              </p>
              <p className='text-4xl lg:text-4xl text-slate-600 mb-1 md:mb-3'>
                Design & Engineering
              </p>
              <p className='text-4xl lg:text-4xl text-slate-600 mb-1 md:mb-3'>
                Branding
              </p>
              <p className='text-4xl lg:text-4xl text-slate-600 mb-1 md:mb-3'>
                Products & Experiences
              </p>
              <p className='text-4xl lg:text-4xl text-slate-600 mb-1 md:mb-3'>
                Social & Community
              </p>
            </div>
            <div className='flex flex-col justify-center flex-1 text-2xl md:text-3xl lg:text-4xl font-light'>
              We partner with clients across communications, brand design and
              consulting, experience design, technology strategy and
              engineering, media planning and buying, and relationship design.
              {/* See how we can help */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <Section {...sections[0]} />
        <Section {...sections[1]} />
        <Section {...sections[2]} />
      </div> */}
    </main>
  );
}
