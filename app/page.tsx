const sections = [
  {
    url: 'https://rocco.ponti.io',
    title: 'Rocco',
    description: 'Save, track, and discover the best places on Earth.',
  },
  {
    url: '/services',
    title: 'Services',
    description: 'What we do',
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

const Section = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
  >
    <h2 className='mb-3 text-2xl font-semibold'>
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
    <main className='flex flex-col items-center justify-between p-24 gap-24'>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          <code className="font-mono font-bold">Ponti Studios R&D</code>
        </p>
      </div> */}

      {/* A responisve hero section with a gradient background and large text describing the agency */}
      <div className='flex flex-col items-center justify-between gap-6'>
        <h1 className='text-6xl font-bold text-center'>Ponti Studios R&D</h1>
        <p className='text-xl text-center'>
          A next-generation production studio for random ideas.
        </p>
      </div>

      <div className='grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <Section {...sections[0]} />
        <Section {...sections[1]} />
        <Section {...sections[2]} />
      </div>
    </main>
  );
}
