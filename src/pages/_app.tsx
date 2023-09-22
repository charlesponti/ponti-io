import { AppProps } from 'next/app';

import 'src/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      data-theme='luxury'
      className='h-full w-full flex text-white antialiased bg-[#fff7f4]'
    >
      <Component {...pageProps} />
    </div>
  );
}

export default App;
