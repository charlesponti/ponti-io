import Services from '@/components/landing/Services';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <div className='layout flex min-h-screen flex-col md:w-[700px]'>
          <Services />
        </div>
      </main>
    </Layout>
  );
}
