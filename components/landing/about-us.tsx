import { BentoBox } from "@/components/bento-box";
import { motion } from "framer-motion";
import { ChartNetwork, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { fadeInUp } from "../../utils/animations";

export const StudioAbout = () => {
	return (
		<motion.div className="md:col-span-4 h-full" {...fadeInUp}>
			<BentoBox accent="gray" title="Why Choose Ponti Studios">
				<div className="flex flex-col md:flex-row-reverse my-14">
					<Image
						alt=""
						height={200}
						width={1200}
						src="/images/people.png"
						className="md:w-1/2"
						style={{
							willChange: "transform",
							transform:
								"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
							transformStyle: "preserve-3d",
						}}
					/>
					<div className="flex flex-col justify-center md:w-1/2">
						<p className="text-lg font-light text-pretty">
							We're a diverse team of international designers and technologists
							using
							<span className="italic underline mx-1 underline-offset-4">
								humanity-centered design
							</span>
							and data science to produce effective solutions to sticky
							problems.
						</p>
					</div>
				</div>
				<section>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="space-y-4">
							<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<ShieldCheck size={24} />
							</div>
							<h3 className="text-xl font-medium text-gray-900">
								Senior Talent
							</h3>
							<p className="text-gray-600">
								Skip the hiring process and get immediate access to seasoned
								developers and designers with enterprise experience.
							</p>
						</div>

						<div className="space-y-4">
							<div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
								<ChartNetwork />
							</div>
							<h3 className="text-xl font-medium text-gray-900">
								Proven Process
							</h3>
							<p className="text-gray-600">
								Our streamlined workflow ensures efficient delivery, transparent
								communication, and predictable results.
							</p>
						</div>

						<div className="space-y-4">
							<ChartUp />
							<h3 className="text-xl font-medium text-gray-900">
								Guaranteed Results
							</h3>
							<p className="text-gray-600">
								We deliver high-quality products on time and within budget, with
								performance guarantees built into every contract.
							</p>
						</div>
					</div>
				</section>
			</BentoBox>
		</motion.div>
	);
};

const ChartUp = () => (
	<div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
		<svg
			role="img"
			aria-label="line chart going up"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6"
		>
			<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
		</svg>
	</div>
);
