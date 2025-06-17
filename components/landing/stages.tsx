import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { BabyIcon, LandmarkIcon, LineChartIcon } from "lucide-react";
import { useRef } from "react";

type BusinessStage = {
	type: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	accentColor: string;
	benefits: string[];
};

const businessStages: BusinessStage[] = [
	{
		type: "Emerging",
		title: "Launch Elegantly",
		subtitle: "Transform concepts into refined products",
		icon: <BabyIcon className="text-bone-100 w-6 h-6" />,
		accentColor: "from-bone-300 to-sage-200",
		benefits: [
			"Premium MVP in 6-8 weeks",
			"Strategic user validation",
			"Investment-grade presentations",
		],
	},
	{
		type: "Growing",
		title: "Scale Gracefully",
		subtitle: "Manage expansion with sophistication",
		icon: <LineChartIcon className="text-bone-100 w-6 h-6" />,
		accentColor: "from-olive-300 to-bone-200",
		benefits: [
			"Architecture for exponential growth",
			"Premium user experiences",
			"Revenue-driving innovations",
		],
	},
	{
		type: "Established",
		title: "Lead Confidently",
		subtitle: "Innovation that maintains your distinction",
		icon: <LandmarkIcon className="text-bone-100 w-6 h-6" />,
		accentColor: "from-sage-300 to-olive-200",
		benefits: [
			"Enterprise-grade security",
			"Seamless system integration",
			"Market-defining innovation",
		],
	},
];

export function Stages() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<motion.section
			className="relative w-full py-16 lg:py-24"
			ref={sectionRef}
			{...fadeInUp}
		>
			<div className="space-y-8">
				{/* Section header */}
				<div className="space-y-4">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-bone-100">
						Excellence at Every Stage
					</h2>
					<p className="text-sage-300 text-lg md:text-xl font-light">
						We've partnered with distinguished companies at every phase. Here's
						how we elevate your particular journey.
					</p>
				</div>

				{/* Business stages grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{businessStages.map((stage, index) => (
						<motion.div
							key={stage.type}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative"
						>
							{/* Main card */}
							<div className="relative h-full bg-charcoal-800/20 border border-sage-700/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-charcoal-800/30 transition-all duration-300 overflow-hidden">
								{/* Background gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${stage.accentColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
								/>

								{/* Large background number */}
								<div className="absolute -bottom-4 -right-4 text-8xl font-black text-sage-800/10 group-hover:text-sage-700/15 transition-colors duration-300">
									{index + 1}
								</div>

								{/* Content */}
								<div className="flex flex-col z-10 gap-4">
									{/* Header */}
									<div className="flex items-start">
										<div>
											<div className="flex items-center space-x-3 mb-2">
												<div
													className={`size-10 flex items-center justify-center rounded-full bg-gradient-to-r ${stage.accentColor}`}
												>
													{stage.icon}
												</div>
												<span className="text-sm font-medium text-sage-400 uppercase tracking-wider font-sans">
													{stage.type}
												</span>
											</div>
											<h3 className="text-2xl font-bold text-bone-100 mb-1 font-serif">
												{stage.title}
											</h3>
											<p className="text-sm text-sage-300 font-light">
												{stage.subtitle}
											</p>
										</div>
									</div>

									{/* Benefits */}
									<div className="space-y-2">
										{stage.benefits.map((benefit, benefitIndex) => (
											<motion.div
												key={benefit}
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1 + benefitIndex * 0.05,
												}}
												viewport={{ once: true }}
												className="flex items-start space-x-3"
											>
												<div
													className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.accentColor} mt-2 flex-shrink-0`}
												/>
												<span className="text-sage-300 font-light">
													{benefit}
												</span>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
