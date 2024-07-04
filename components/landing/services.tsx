import { SectionTitle } from "@/components/Section";

export const Services = () => (
	<section className="flex flex-col w-full mt-28 mb-14">
		<SectionTitle>What we do</SectionTitle>
		<div className="flex flex-row justify-stretch gap-3 flex-wrap">
			<ServiceChip>
				Product Management <br />& Strategy
			</ServiceChip>
			<ServiceChip>
				Design <br /> & Engineering
			</ServiceChip>
			<ServiceChip>
				Branding <br />& Marketing
			</ServiceChip>
			<ServiceChip>
				Events <br />& Experienes
			</ServiceChip>
			<ServiceChip>
				Social Media <br />& Community
			</ServiceChip>
		</div>
	</section>
);

const ServiceChip = ({ children }: React.PropsWithChildren) => (
	<p className="card bg-white border-green-600 border-2 rounded-xl text-lg flex-1 flex justify-center min-h-[110px] min-w-[200px] bg-opacity-20">
		{children}
	</p>
);
