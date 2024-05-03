import Image from "next/image";
import type { PropsWithChildren } from "react";

const ServiceChip = ({ children }: PropsWithChildren) => (
	<p className="card bg-white border-blue-400 border-2 rounded-xl text-lg flex-1 flex justify-center min-h-[110px] min-w-[200px] bg-opacity-20">
		{children}
	</p>
);
const LandingSection = ({ children }: PropsWithChildren) => (
	<div className="flex flex-col w-full max-w-[1200px] px-4 my-20 md:my-32 text-pretty z-10">
		{children}
	</div>
);

const BrandsWeWorkWith = () => (
	<LandingSection>
		<h2 className="leading-fluid-1 text-fluid-1 mb-6">Past clients</h2>
		<div className="flex flex-row justify-evenly gap-3 flex-wrap">
			<Image
				alt=""
				className="h-32 w-44 grayscale"
				height={25}
				width={150}
				src="/images/companies/streamyard.jpeg"
			/>
			<Image
				alt=""
				className="h-32 w-32 grayscale"
				height={25}
				width={150}
				src="/images/companies/kensho.jpg"
			/>
			<Image
				alt=""
				className="h-32 w-32 grayscale rounded-xl"
				height={50}
				width={200}
				src="/images/companies/humana.jpg"
			/>
			<Image
				alt=""
				className="h-32 w-32 grayscale rounded-xl"
				height={50}
				width={200}
				src="/images/companies/mimecast.jpg"
			/>
			<Image
				alt=""
				className="h-32 w-32 grayscale rounded-xl"
				height={50}
				width={200}
				src="/images/companies/thomson-reuters.jpg"
			/>
			<Image
				alt=""
				className="h-32 w-32 grayscale rounded-xl"
				height={50}
				width={200}
				src="/images/companies/your-logo.jpg"
			/>
		</div>
	</LandingSection>
);

export default function Home() {
	return (
		<div className="container flex flex-col items-center w-full max-w-[1200px] mt-12 mb-24">
			<LandingSection>
				<h2 className="font-display font-semibold text-4xl leading-[1.15] text-balance text-black sm:text-6xl sm:leading-[1.15] mb-6 md:text-center">
					Lovable technology for <span className="text-purple-400">humans</span>
					.
				</h2>
				{/* <p className="font-light text-lg text-gray-600 sm:text-xl md:text-2xl md:text-center">
					We build, scale, and grow lovable technlogy.
				</p> */}
			</LandingSection>
			<BrandsWeWorkWith />
			<LandingSection>
				<h2 className="leading-fluid-1 text-fluid-1 mb-6">Services</h2>
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
			</LandingSection>
			<LandingSection>
				<h2 className="leading-fluid-1 text-fluid-1 mb-4">Who we are</h2>
				<div className="flex flex-col md:flex-row-reverse">
					<Image
						alt=""
						height={200}
						width={1200}
						src="https://assets-global.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg"
						className="md:w-1/2"
						style={{
							willChange: "transform",
							transform:
								"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
							transformStyle: "preserve-3d",
						}}
					/>
					<p className="text-lg font-light text-pretty">
						We're a diverse team of international designers and technologists
						using
						<span className="italic underline mx-1 underline-offset-4">
							humanity-centered design
						</span>
						and data science to produce effective solutions to sticky problems.
					</p>
				</div>
			</LandingSection>
		</div>
	);
}
