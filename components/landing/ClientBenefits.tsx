import * as React from 'react';

const ClientBenefitsCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-800 shadow-xl rounded-lg overflow-hidden'>
      <div className='p-4 md:p-6'>{children}</div>
    </div>
  );
};

const ClientBenefitsTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className='mb-2'>{children}</h3>
);

const ClientBenefitsSubtitle = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className='text-md'>{children}</p>;

const ClientBenefits = () => {
  return (
    // Wrap with rounded corners and a mutli-colored opaque shadow

    <div className='flex flex-col shadow-xl shadow-indigo-500/40 p-4 rounded-md'>
      <h2 className='mb-4'>We'll help you</h2>

      <div className='grid gap-4 grid-cols-2 grid-rows-2'>
        <ClientBenefitsCard>
          <ClientBenefitsTitle>Increase revenue</ClientBenefitsTitle>
          <ClientBenefitsSubtitle>
            Want to increase your revenue by 3x? We can help you do that.
          </ClientBenefitsSubtitle>
        </ClientBenefitsCard>
        <ClientBenefitsCard>
          <ClientBenefitsTitle>Revolutionize workflows</ClientBenefitsTitle>
          <ClientBenefitsSubtitle>
            Increase your teams' productivity by 90% with our workflow
            optimizations.
          </ClientBenefitsSubtitle>
        </ClientBenefitsCard>
        <ClientBenefitsCard>
          <ClientBenefitsTitle>Reduce costs</ClientBenefitsTitle>
          <ClientBenefitsSubtitle>
            Reduce production and staffing costs.
          </ClientBenefitsSubtitle>
        </ClientBenefitsCard>
        <ClientBenefitsCard>
          <ClientBenefitsTitle>Win awards</ClientBenefitsTitle>
          <ClientBenefitsSubtitle>
            We've helped clients win technical and design awards across multiple
            industries by build product that are beloved by their users.
          </ClientBenefitsSubtitle>
        </ClientBenefitsCard>
      </div>
    </div>
  );
};

export default ClientBenefits;
