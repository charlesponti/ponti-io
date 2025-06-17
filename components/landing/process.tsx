import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Discovery",
		desc: "We meticulously analyze your vision, distinguished clientele, and market position to architect a strategic blueprint for excellence.",
		color: "from-bone-300 to-sage-200",
		icon: "🔍",
		number: "01",
	},
	{
		title: "Strategy",
		desc: "We craft a comprehensive roadmap and precise technical specifications that harmonize with your aspirations and user expectations.",
		color: "from-sage-300 to-olive-200",
		icon: "🧠",
		number: "02",
	},
	{
		title: "Creation",
		desc: "Our master artisans design and develop your product using premium technologies and refined methodologies.",
		color: "from-olive-300 to-bone-200",
		icon: "💎",
		number: "03",
	},
	{
		title: "Excellence",
		desc: "We deliver your sophisticated solution with ongoing stewardship to ensure enduring success and continued distinction.",
		color: "from-bone-200 to-sage-300",
		icon: "✨",
		number: "04",
	},
];

export const StudioProcess = () => {
	return (
		<motion.div className="w-full my-12 sm:my-16" {...fadeInUp}>
			<div className="space-y-4 mb-12 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-bone-200 to-sage-300 text-transparent bg-clip-text font-serif">
					Our Methodology
				</h2>
				<p className="text-sage-300 text-lg md:text-xl max-w-2xl font-light">
					Our refined approach ensures exceptional outcomes for every
					distinguished partnership
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
				{steps.map((step, index) => (
					<motion.div
						key={step.title}
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
								{step.number}
							</div>

							{/* Top accent bar with gradient */}
							<div
								className={`h-2 w-24 rounded-full bg-gradient-to-r ${step.color} mb-6`}
								aria-hidden="true"
							/>

							{/* Icon and title */}
							<div className="flex items-center mb-4 z-10 relative">
								<span className="text-2xl mr-3" role="img" aria-hidden="true">
									{step.icon}
								</span>
								<h3 className="text-xl font-semibold text-bone-100 font-serif">
									{step.title}
								</h3>
							</div>

							{/* Description */}
							<p className="text-sage-300 z-10 leading-relaxed relative font-light">
								{step.desc}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};
