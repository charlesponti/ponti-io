import { motion } from "framer-motion";
import { ChartLineIcon, ChartNetwork, ShieldCheck } from "lucide-react";
import { fadeInUp } from "../../utils/animations";

const features = [
	{
		title: "Expert Team",
		description:
			"Work with seasoned product strategists, designers, and engineers who have delivered successful products for companies like yours.",
		icon: ShieldCheck,
		color: "from-bone-300 to-sage-200",
		number: "01",
	},
	{
		title: "Proven Process",
		description:
			"Our tested methodology ensures on-time delivery, clear communication, and consistently exceptional results that exceed expectations.",
		icon: ChartNetwork,
		color: "from-sage-300 to-olive-200",
		number: "02",
	},
	{
		title: "Guaranteed Results",
		description:
			"We deliver exceptional products on time and within budget, with performance guarantees built into every partnership.",
		icon: ChartLineIcon,
		color: "from-olive-300 to-bone-200",
		number: "03",
	},
];

export const StudioAbout = () => {
	return (
		<motion.div className="w-full my-12 sm:my-16" {...fadeInUp}>
			<div className="space-y-4 mb-12 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-bone-200 to-sage-300 text-transparent bg-clip-text font-serif">
					Why Choose Ponti Studios
				</h2>
				<p className="text-sage-300 text-lg md:text-xl max-w-2xl font-light">
					We're a global team of product strategists, designers, and engineers
					who specialize in
					<span className="italic underline mx-1 underline-offset-4 text-bone-300 font-medium">
						human-centered design
					</span>
					and data-driven development to solve complex business challenges.
				</p>
			</div>

			{/* Mobile Layout: Single card with integrated features */}
			<div className="block md:hidden">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="relative"
				>
					<div className="overflow-hidden bg-charcoal-800/20 border border-sage-700/20 backdrop-blur-sm rounded-xl p-6 hover:bg-charcoal-800/30 transition-all duration-300 hover:shadow-xl relative group">
						{/* Large transparent text in background */}
						<div
							className="text-6xl font-black text-sage-800/10 absolute -bottom-2 right-2 group-hover:text-sage-700/15 transition-colors duration-300 font-serif"
							aria-hidden="true"
						>
							PONTI
						</div>

						{/* Top accent bar */}
						<div
							className="h-2 w-32 rounded-full bg-gradient-to-r from-bone-300 via-sage-300 to-olive-300 mb-8"
							aria-hidden="true"
						/>

						{/* Main content header */}
						<div className="mb-8 z-10 relative">
							<h3 className="text-2xl font-bold text-bone-100 mb-3 font-serif">
								Our Distinction
							</h3>
							<p className="text-sage-300 text-sm leading-relaxed font-light">
								Three core principles that set us apart from conventional
								agencies.
							</p>
						</div>

						{/* Features list */}
						<div className="space-y-6 z-10 relative">
							{features.map((feature, index) => {
								const IconComponent = feature.icon;
								return (
									<motion.div
										key={feature.title}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className="space-y-3"
									>
										{/* Header with icon */}
										<div className="flex items-center space-x-3">
											<div className="size-8 flex items-center justify-center rounded-full bg-sage-700/20 flex-shrink-0">
												<IconComponent size={16} className="text-bone-200" />
											</div>
											<h4 className="text-lg font-semibold text-bone-100 font-serif">
												{feature.title}
											</h4>
										</div>

										{/* Description */}
										<p className="text-sage-300 text-sm leading-relaxed ml-11 font-light">
											{feature.description}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Desktop Layout: Separate cards */}
			<div className="hidden md:grid grid-cols-1 gap-6 md:grid-cols-3">
				{features.map((feature, index) => {
					const IconComponent = feature.icon;
					return (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative"
						>
							{/* Card with glass effect */}
							<div className="overflow-hidden bg-charcoal-800/20 border border-sage-700/20 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col hover:bg-charcoal-800/30 transition-all duration-300 hover:shadow-xl relative group">
								{/* Large transparent number in background */}
								<div
									className="text-8xl font-black text-sage-800/10 absolute -bottom-4 right-1 group-hover:text-sage-700/15 transition-colors duration-300"
									aria-hidden="true"
								>
									{feature.number}
								</div>

								{/* Top accent bar with gradient */}
								<div
									className={`h-2 w-24 rounded-full bg-gradient-to-r ${feature.color} mb-6`}
									aria-hidden="true"
								/>

								{/* Icon and title */}
								<div className="flex items-center mb-4 z-10 relative">
									<div className="size-8 flex items-center justify-center rounded-full bg-sage-700/20 mr-3">
										<IconComponent size={20} className="text-bone-200" />
									</div>
									<h3 className="text-xl font-semibold text-bone-100 font-serif">
										{feature.title}
									</h3>
								</div>

								{/* Description */}
								<p className="text-sage-300 z-10 leading-relaxed relative font-light">
									{feature.description}
								</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};
