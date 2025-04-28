import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { BabyIcon, LandmarkIcon, LineChartIcon } from "lucide-react";
import { useRef } from "react";

type Stage = {
	title: string;
	description: string;
	icon: React.ReactNode;
	accentColor: string;
	features: string[];
	alignment: "left" | "right";
};
interface StageCardProps {
	stage: Stage;
	index: number;
}

const stageData: Stage[] = [
	{
		title: "Ignite Your Startup",
		description:
			"Turn your vision into reality that users love and investors can't resist.",
		icon: <BabyIcon className="text-white w-6 h-6" />,
		accentColor: "bg-gradient-to-r from-lime-300 to-lime-500",
		features: [
			"Lean, mean MVPs",
			"Breakthrough user validation",
			"Investor-ready pitch decks",
		],
		alignment: "left",
	},
	{
		title: "Amplify Your Growth",
		description:
			"Scale faster with developers who turn challenges into triumphs.",
		icon: <LineChartIcon className="text-white w-6 h-6" />,
		accentColor: "bg-gradient-to-r from-blue-300 to-blue-500",
		features: [
			"Game-changing features",
			"Blazing-fast performance",
			"Data-driven analytics",
		],
		alignment: "right",
	},
	{
		title: "Dominate Your Market",
		description: "Stay untouchable with innovation that keeps you miles ahead.",
		icon: <LandmarkIcon className="text-white w-6 h-6" />,
		accentColor: "bg-gradient-to-r from-purple-300 to-purple-500",
		features: [
			"Seamless enterprise integration",
			"Fort Knox-level security",
			"Custom solutions that wow",
		],
		alignment: "left",
	},
];

export function Stages() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<motion.section
			className="relative w-full py-16 lg:py-24 overflow-hidden"
			{...fadeInUp}
			ref={sectionRef}
		>
			{/* Background design elements */}
			<div className="absolute inset-0 opacity-50">
				<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-lime-500/20 to-transparent rounded-full blur-3xl" />
			</div>

			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section header */}
				<div className="max-w-4xl mx-auto mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex items-center justify-center mb-6"
					>
						<div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 shadow-lg">
							<LineChartIcon size={28} className="text-white" />
						</div>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-5xl font-extrabold tracking-tight mb-4"
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
							Rocket Your Growth
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-gray-300 max-w-3xl mx-auto"
					>
						Expert assistance at any stage of your journey, from concept to
						market domination
					</motion.p>
				</div>

				{/* Stages */}
				<div className="space-y-28">
					{stageData.map((stage, index) => (
						<StageCard key={stage.title} stage={stage} index={index} />
					))}
				</div>
			</div>
		</motion.section>
	);
}

const StageCard = ({ stage, index }: StageCardProps) => {
	const isEven = index % 2 === 0;
	const { title, description, icon, accentColor, features, alignment } = stage;

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: index * 0.1 }}
			viewport={{ once: true, margin: "-100px" }}
			className={`flex flex-col ${
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			} items-center gap-6 md:gap-10`}
		>
			{/* Number and Visual side */}
			<div className="w-full md:w-2/5">
				<div className="relative">
					<div
						className={`${accentColor} h-64 md:h-96 w-full rounded-2xl overflow-hidden`}
					>
						<div className="absolute inset-0 opacity-90 mix-blend-overlay bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
						<div className="relative h-full flex flex-col justify-center items-center p-8 md:p-12">
							<div className="text-[120px] md:text-[180px] font-black text-white/10 absolute bottom-0 right-4">
								{(index + 1).toString().padStart(2, "0")}
							</div>
							<div className="z-10 text-left w-full">
								<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
									{title}
								</h3>
								<p className="text-gray-300 text-lg mb-6">{description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content side */}
			<div className="w-full md:w-3/5">
				<ul className="space-y-4">
					{features.map((feature) => (
						<motion.li
							key={feature}
							initial={{ opacity: 0, x: isEven ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.4,
								delay: features.indexOf(feature) * 0.1,
							}}
							viewport={{ once: true }}
							className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
						>
							<div className="flex items-center">
								<span className={`w-2 h-10 mr-4 rounded ${accentColor}`} />
								<span className="text-lg md:text-xl font-medium text-white">
									{feature}
								</span>
							</div>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};
