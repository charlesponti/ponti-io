import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Discovery",
		desc: "We analyze your business goals, target audience, and market position to create a strategic roadmap.",
		color: "from-amber-300 to-amber-400",
		icon: "🔍",
		number: "01",
	},
	{
		title: "Strategy",
		desc: "Develop a roadmap and technical requirements that align with your business objectives and target user needs.",
		color: "from-stone-300 to-stone-400",
		icon: "🧠",
		number: "02",
	},
	{
		title: "Build",
		desc: "Our expert team designs and builds your product using best-in-class technologies and agile methodologies.",
		color: "from-slate-300 to-slate-400",
		icon: "💻",
		number: "03",
	},
	{
		title: "Launch / Scale",
		desc: "We deploy your solution and provide ongoing support to ensure long-term success and growth.",
		color: "from-rose-200 to-rose-300",
		icon: "🚀",
		number: "04",
	},
];

export const StudioProcess = () => {
	return (
		<motion.div className="w-full my-12 sm:my-16" {...fadeInUp}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="space-y-4 mb-12 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-stone-100 to-stone-400 text-transparent bg-clip-text">
						Our System
					</h2>
					<p className="text-gray-400 text-lg md:text-xl max-w-2xl">
						Our structured methodology delivers exceptional results for every
						project
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
							<div className="overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-300 hover:shadow-xl relative group">
								{/* Large transparent number in background */}
								<div
									className="text-8xl font-black text-white/5 absolute -bottom-4 right-1 group-hover:text-white/8 transition-colors duration-300"
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
									<h3 className="text-xl font-semibold text-white">
										{step.title}
									</h3>
								</div>

								{/* Description */}
								<p className="text-gray-200 z-10 leading-relaxed relative">
									{step.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};
