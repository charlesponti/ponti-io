import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme='luxury'>
      <div className='text-white antialiased dark:bg-gray-800 dark:text-white'>
        {children}
      </div>
    </div>
  );
}
