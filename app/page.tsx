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
    <main className='flex flex-col items-center justify-between'>
      <div className='layout flex flex-col md:w-[700px]'>
        {/* Hero */}
        <div
          className='bg-primary overflow-hidden'
          style={{ textWrap: 'pretty' }}
        >
          <p className='text-4xl mt-4 text-primary font-semibold lg:text-5xl'>
            We build <b>lovable</b> technology for <b>humans</b>.
          </p>
          <p className='text-primary mt-6 text-lg md:text-xl'>
            We're a diverse team of international designers and technologists
            using <i>humanity-centered design</i> and <i>data science</i> to
            understand user needs to produce highly efficient and effective
            solutions.
          </p>
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
