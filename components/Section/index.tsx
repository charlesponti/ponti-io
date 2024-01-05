export default function Section({ children }: React.PropsWithChildren) {
  return (
    <div className='bg-primary rounded-lg shadow-lg overflow-hidden my-9 p-8'>
      {children}
    </div>
  );
}
