import Image from "next/image";
import type { PropsWithChildren } from "react";

export default function Home() {
	return (
		<div className="container flex flex-col items-center w-full max-w-[1200px] mb-24 lg:border-x-2 px-2 md:px-8">
			<section className="flex items-center justify-center max-h-[500px] min-h-[500px] h-[calc(100vh-300px)] mt-8">
				<h2 className="text-balance font-serif text-black text-[60px] leading-[75px] md:text-[100px] md:leading-[95px] mb-6 md:text-center">
					<i className="font-serif font-medium tracking-tighter">
						Lovable technology
					</i>{" "}
					<br /> <span className="text-gray-400 font-light"> for humans. </span>
				</h2>
			</section>
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
			<BrandsWeWorkWith />
			<LandingSection>
				<SectionTitle>Who we are</SectionTitle>
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

const LandingSection = ({ children }: PropsWithChildren) => (
	<div className="flex flex-col w-full my-20 md:my-32 text-pretty z-10">
		{children}
	</div>
);

const SectionTitle = ({ children }: PropsWithChildren) => (
	<h2 className="text-3xl font-serif tracking-tight italic mb-4 text-gray-400">
		{children}
	</h2>
);

const BrandsWeWorkWith = () => (
	<section className="flex flex-col w-full mt-10">
		<SectionTitle>Who we've worked with</SectionTitle>
		<div className="flex flex-row justify-stretch gap-3 flex-wrap">
			<Image
				alt=""
				className="h-[150px] max-w-[175px] rounded-xl"
				height={150}
				width={230}
				src="/images/companies/streamyard.jpeg"
			/>
			<Image
				alt=""
				className="h-[150px] max-w-[175px] rounded-xl"
				height={150}
				width={200}
				src="/images/companies/kensho.jpg"
			/>
			<Image
				alt=""
				className="h-[150px] max-w-[175px] rounded-xl"
				height={250}
				width={250}
				src="/images/companies/humana.jpg"
			/>
			<Image
				alt=""
				className="h-[150px] max-w-[175px] rounded-xl"
				height={150}
				width={200}
				src="/images/companies/mimecast.jpg"
			/>
			<Image
				alt=""
				className="h-[150px] max-w-[150px] rounded-xl"
				height={150}
				width={200}
				src="/images/companies/thomson-reuters.jpg"
			/>
			<Image
				alt=""
				className="h-[150px] max-w-[175px] grayscale rounded-xl"
				height={150}
				width={200}
				src="/images/companies/your-logo.jpg"
			/>
		</div>
	</section>
);

const ServiceChip = ({ children }: PropsWithChildren) => (
	<p className="card bg-white border-blue-400 border-2 rounded-xl text-lg flex-1 flex justify-center min-h-[110px] min-w-[200px] bg-opacity-20">
		{children}
	</p>
);
