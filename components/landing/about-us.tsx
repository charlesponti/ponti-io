import { BentoBox } from "@/components/bento-box";
import { motion } from "framer-motion";
import { ChartLineIcon, ChartNetwork, ShieldCheck } from "lucide-react";
import { fadeInUp } from "../../utils/animations";

const features = [
	{
		title: "Senior Talent",
		description:
			"Skip the hiring process and get immediate access to seasoned developers and designers with enterprise experience.",
		icon: ShieldCheck,
		bgColor: "bg-slate-600/60",
	},
	{
		title: "Proven Process",
		description:
			"Our streamlined workflow ensures efficient delivery, transparent communication, and predictable results.",
		icon: ChartNetwork,
		bgColor: "bg-stone-600/60",
	},
	{
		title: "Guaranteed Results",
		description:
			"We deliver high-quality products on time and within budget, with performance guarantees built into every contract.",
		icon: ChartLineIcon,
		bgColor: "bg-gradient-to-br from-amber-200/40 to-amber-400/60",
	},
];

export const StudioAbout = () => {
	return (
		<motion.div className="md:col-span-4 h-full" {...fadeInUp}>
			<BentoBox
				accent="gray"
				title="Why Choose Ponti Studios"
				className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl space-y-6 md:space-y-12"
			>
				<div className="flex flex-col md:flex-row">
					<p className="text-lg font-light text-gray-200 text-pretty md:w-1/2">
						We're a diverse team of international designers and technologists
						using
						<span className="italic underline mx-1 underline-offset-4">
							humanity-centered design
						</span>
						and data science to produce effective solutions to sticky problems.
					</p>
				</div>
				<section className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="space-y-4">
								<h3 className="flex items-center gap-2 text-white">
									<div
										className={`size-8 flex items-center justify-center rounded-full ${feature.bgColor}`}
									>
										<IconComponent size={20} />
									</div>
									<span className="text-xl font-medium">{feature.title}</span>
								</h3>
								<p className="text-gray-200">{feature.description}</p>
							</div>
						);
					})}
				</section>
			</BentoBox>
		</motion.div>
	);
};
