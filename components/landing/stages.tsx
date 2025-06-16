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
		type: "Startup",
		title: "Launch Faster",
		subtitle: "Turn ideas into profitable products",
		icon: <BabyIcon className="text-white w-6 h-6" />,
		accentColor: "from-rose-400 to-pink-500",
		benefits: [
			"MVP in 6-8 weeks",
			"User validation built-in",
			"Investor-ready demos",
		],
	},
	{
		type: "Scale-up",
		title: "Scale Smarter",
		subtitle: "Handle growth without breaking",
		icon: <LineChartIcon className="text-white w-6 h-6" />,
		accentColor: "from-blue-400 to-indigo-500",
		benefits: [
			"Systems that handle 10x growth",
			"Performance that keeps users happy",
			"Features that drive revenue",
		],
	},
	{
		type: "Enterprise",
		title: "Stay Ahead",
		subtitle: "Innovation that maintains your edge",
		icon: <LandmarkIcon className="text-white w-6 h-6" />,
		accentColor: "from-amber-400 to-orange-500",
		benefits: [
			"Enterprise-grade security",
			"Seamless integrations",
			"Innovation that differentiates",
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
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Whatever Stage You're At
					</h2>
					<p className="text-gray-400 text-lg md:text-xl">
						We've helped hundreds of companies at every stage. Here's how we
						accelerate your specific journey.
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
							<div className="relative h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/8 transition-all duration-300 overflow-hidden">
								{/* Background gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${stage.accentColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
								/>

								{/* Large background number */}
								<div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">
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
												<span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
													{stage.type}
												</span>
											</div>
											<h3 className="text-2xl font-bold text-white mb-1">
												{stage.title}
											</h3>
											<p className="text-sm text-gray-300">{stage.subtitle}</p>
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
												<span className="text-gray-300">{benefit}</span>
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
