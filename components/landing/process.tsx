import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Discovery",
		desc: "We analyze your business goals, target audience, and market position to create a strategic roadmap.",
		color: "from-yellow-400 to-orange-500",
		icon: "🔍",
		number: "01",
	},
	{
		title: "Strategy",
		desc: "Develop a roadmap and technical requirements that align with your business objectives and target user needs.",
		color: "from-blue-400 to-blue-600",
		icon: "🧠",
		number: "02",
	},
	{
		title: "Design & Development",
		desc: "Our expert team designs and builds your product using best-in-class technologies and agile methodologies.",
		color: "from-green-400 to-green-600",
		icon: "💻",
		number: "03",
	},
	{
		title: "Launch & Scale",
		desc: "We deploy your solution and provide ongoing support to ensure long-term success and growth.",
		color: "from-purple-400 to-purple-600",
		icon: "🚀",
		number: "04",
	},
];

export const StudioProcess = () => {
	return (
		<motion.div className="w-full my-12 sm:my-16" {...fadeInUp}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
						Our Proven Approach
					</h2>
					<p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
						We follow a structured methodology to deliver exceptional results
						for every project
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
							<div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-300 hover:shadow-xl relative group">
								{/* Large transparent number in background */}
								<div
									className="absolute right-4 bottom-4 text-6xl text-white/5 font-bold group-hover:text-white/10 transition-colors duration-300"
									aria-hidden="true"
								>
									{step.number}
									{/* Top accent bar with gradient */}
									<div
										className={`h-2 w-24 mx-auto rounded-full bg-gradient-to-r ${step.color}`}
										aria-hidden="true"
									/>
								</div>

								{/* Icon and title */}
								<div className="flex items-center mb-4 z-10">
									<span className="text-2xl mr-3" role="img" aria-hidden="true">
										{step.icon}
									</span>
									<h3 className="text-xl font-semibold text-white">
										{step.title}
									</h3>
								</div>

								{/* Description */}
								<p className="text-gray-200 z-10 leading-relaxed">
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
