import * as React from 'react';

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div data-theme='luxury'>
      <div className='text-white antialiased dark:bg-black dark:text-white'>
        {children}
      </div>
    </div>
  );
}
