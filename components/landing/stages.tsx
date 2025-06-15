import { fadeInUp } from "@/utils/animations";
import { cn } from "@/utils/utils";
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
		accentColor: "bg-gradient-to-r from-rose-300 to-rose-400",
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
		accentColor: "bg-gradient-to-r from-stone-200 to-stone-400",
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
		accentColor: "bg-gradient-to-r from-amber-200 to-amber-300",
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
			ref={sectionRef}
			{...fadeInUp}
		>
			{/* Background design elements */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-l from-amber-200/10 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-stone-300/10 to-transparent rounded-full blur-3xl" />
			</div>

			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section header */}
				<div className="space-y-4 mb-12 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-stone-100 to-stone-400 text-transparent bg-clip-text">
						Rocket Your Growth
					</h2>
					<p className="text-gray-400 text-lg md:text-xl max-w-2xl">
						Expert assistance at any stage of your journey, from concept to
						market domination
					</p>
				</div>

				{/* Stages */}
				<div className="space-y-16">
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
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-6 md:flex-row-reverse",
				{
					"md:flex-row": isEven,
				},
			)}
		>
			{/* Number and Visual side */}
			<div
				className={cn(
					"w-full h-full relative rounded-2xl overflow-hidden bg-white/5 border border-white/10",
				)}
			>
				<div className={cn("absolute inset-0 opacity-20", accentColor)} />
				<div className="relative h-full flex flex-col justify-center items-center p-8 md:p-12">
					<div className="text-[120px] md:text-[180px] font-black text-white/5 absolute bottom-0 right-4">
						{(index + 1).toString().padStart(2, "0")}
					</div>
					<div className="z-10 text-left w-full">
						<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
							{title}
						</h3>
						<p className="text-gray-200 text-lg mb-6">{description}</p>
					</div>
				</div>
			</div>

			{/* Content side */}
			<ul className="w-full h-full space-y-4">
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
		</motion.div>
	);
};
