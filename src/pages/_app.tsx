import { AppProps } from 'next/app';

import 'src/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      data-theme='luxury'
      className='flex h-full w-full bg-[#fff7f4] text-white antialiased'
    >
      <Component {...pageProps} />
    </div>
  );
}

export default App;
