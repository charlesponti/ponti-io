import Image from "next/image";

import { SectionTitle } from "@/components/section";

export const AboutUs = ({ children }: React.PropsWithChildren) => (
	<section className="flex flex-col w-full my-20 md:my-32 text-pretty z-10">
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
				We're a diverse team of international designers and technologists using
				<span className="italic underline mx-1 underline-offset-4">
					humanity-centered design
				</span>
				and data science to produce effective solutions to sticky problems.
			</p>
		</div>
	</section>
);
