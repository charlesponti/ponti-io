import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ServiceChip = ({ children }: PropsWithChildren) => (
	<p className="card bg-white border-blue-400 border-2 max-w-fit rounded-xl text-lg flex-1 md:min-w-[200px]">
		{children}
	</p>
);
const GradialCard = ({
	children,
	className,
}: PropsWithChildren & {
	className?: string;
}) => (
	<div
		className={twMerge(
			"flex flex-col justify-center w-part-full py-16 px-4 mb-16",
			className,
		)}
		style={{ textWrap: "balance" }}
	>
		{children}
	</div>
);

export default function Home() {
	return (
		<div className="container flex flex-col items-center w-full max-w-[1200px] gap-6">
			<div className="flex flex-col items-center w-full max-w-[800px] gap-6 py-32">
				<h1>Lovable technology for humans.</h1>
				<p className="font-light text-lg text-center">
					We're a diverse team of international designers and technologists
					using humanity-centered design and data science to produce efficient
					and effective solutions that solve sticky problems.
				</p>
			</div>
			<GradialCard className="from-slate-200 to-white">
				<h2 className="mb-fluid-2 text-fluid-2">Services</h2>
				<div className="flex flex-col gap-12">
					<div className="flex flex-col md:flex-row justify-around gap-3">
						<ServiceChip>
							Product Feasbility <br /> & Workshops
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
				</div>
			</GradialCard>
			<GradialCard className="from-slate-200 to-white">
				<p className="text-primary text-lg md:text-4xl w-[90%] font-thin">
					We partner with clients across communications, brand design and
					consulting, experience design, technology strategy and engineering,
					media planning and buying, and relationship design.
					{/* See how we can help */}
				</p>
			</GradialCard>
		</div>
	);
}
