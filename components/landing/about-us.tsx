import { motion } from "framer-motion";
import { ChartLineIcon, ChartNetwork, ShieldCheck } from "lucide-react";
import { fadeInUp } from "../../utils/animations";

const features = [
	{
		title: "Senior Talent",
		description:
			"Skip the hiring process and get immediate access to seasoned developers and designers with enterprise experience.",
		icon: ShieldCheck,
		color: "from-slate-300 to-slate-400",
		number: "01",
	},
	{
		title: "Proven Process",
		description:
			"Our streamlined workflow ensures efficient delivery, transparent communication, and predictable results.",
		icon: ChartNetwork,
		color: "from-stone-300 to-stone-400",
		number: "02",
	},
	{
		title: "Guaranteed Results",
		description:
			"We deliver high-quality products on time and within budget, with performance guarantees built into every contract.",
		icon: ChartLineIcon,
		color: "from-amber-300 to-amber-400",
		number: "03",
	},
];

export const StudioAbout = () => {
	return (
		<motion.div className="w-full my-12 sm:my-16" {...fadeInUp}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="space-y-4 mb-12 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-stone-100 to-stone-400 text-transparent bg-clip-text">
						Why Choose Ponti Studios
					</h2>
					<p className="text-gray-400 text-lg md:text-xl max-w-2xl">
						We're a diverse team of international designers and technologists
						using
						<span className="italic underline mx-1 underline-offset-4 text-gray-300">
							humanity-centered design
						</span>
						and data science to produce effective solutions to sticky problems.
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
						<div className="overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl relative group">
							{/* Large transparent text in background */}
							<div
								className="text-6xl font-black text-white/5 absolute -bottom-2 right-2 group-hover:text-white/8 transition-colors duration-300"
								aria-hidden="true"
							>
								PONTI
							</div>

							{/* Top accent bar */}
							<div
								className="h-2 w-32 rounded-full bg-gradient-to-r from-slate-300 via-stone-300 to-amber-300 mb-8"
								aria-hidden="true"
							/>

							{/* Main content header */}
							<div className="mb-8 z-10 relative">
								<h3 className="text-2xl font-bold text-white mb-3">
									Our Advantages
								</h3>
								<p className="text-gray-300 text-sm leading-relaxed">
									Three key pillars that set us apart in delivering exceptional
									results.
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
												<div className="size-8 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
													<IconComponent size={16} className="text-white" />
												</div>
												<h4 className="text-lg font-semibold text-white">
													{feature.title}
												</h4>
											</div>

											{/* Description */}
											<p className="text-gray-200 text-sm leading-relaxed ml-11">
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
								<div className="overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-300 hover:shadow-xl relative group">
									{/* Large transparent number in background */}
									<div
										className="text-8xl font-black text-white/5 absolute -bottom-4 right-1 group-hover:text-white/8 transition-colors duration-300"
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
										<div className="size-8 flex items-center justify-center rounded-full bg-white/10 mr-3">
											<IconComponent size={20} className="text-white" />
										</div>
										<h3 className="text-xl font-semibold text-white">
											{feature.title}
										</h3>
									</div>

									{/* Description */}
									<p className="text-gray-200 z-10 leading-relaxed relative">
										{feature.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};
