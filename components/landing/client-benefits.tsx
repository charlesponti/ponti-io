import { cn } from "@/lib/utils";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { BadgeCheck, BarChart3, LineChart, Users } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

const ClientBenefits = () => {
	const successStories = [
		{
			icon: <LineChart className="h-8 w-8 text-amber-400" />,
			title: "Enterprise Platform Growth",
			description:
				"Developed consumer Teams and enterprise Business plans with role-based access control and collaboration features, unlocking significant new revenue streams.",
			quote:
				"Ponti Studios' development work unlocked $15M+ in new ARR and drove 13% growth in our consumer user base through innovative collaboration features.",
			client: "StreamYard",
			borderColor: "border-amber-400/20 hover:border-amber-400/40",
			bgColor: "bg-amber-400/10 group-hover:bg-amber-400/20",
		},
		{
			icon: <Users className="h-8 w-8 text-stone-400" />,
			title: "Creator Marketplace Platform",
			description:
				"Designed a two-sided platform using vector-based recommendations and generative AI conversation starters to connect creators with their audience and drive engagement.",
			quote:
				"Our platform now serves 20K+ monthly active users with a 40% increase in user engagement and 300% YoY growth in creator collaborations.",
			client: "Collab",
			borderColor: "border-stone-400/20 hover:border-stone-400/40",
			bgColor: "bg-stone-400/10 group-hover:bg-stone-400/20",
		},
		{
			icon: <BarChart3 className="h-8 w-8 text-emerald-400" />,
			title: "Music Industry Innovation",
			description:
				"Built an end-to-end platform for independent musicians to optimize tours and finances with intelligent route planning, financial dashboards, and audience insights.",
			quote:
				"Revrock significantly reduced our tour costs and provided invaluable financial clarity through their comprehensive dashboards.",
			client: "Independent Musician",
			borderColor: "border-emerald-400/20 hover:border-emerald-400/40",
			bgColor: "bg-emerald-400/10 group-hover:bg-emerald-400/20",
		},
		{
			icon: <BadgeCheck className="h-8 w-8 text-rose-300" />,
			title: "Entertainment Industry Solution",
			description:
				"Led the development of an AI-powered application enabling Hollywood showrunners to efficiently triage writer submissions with automated data extraction and vector-based similarity search.",
			quote:
				"Prolog transformed our candidate evaluation process, saving countless hours and helping us discover talented writers we might have otherwise missed.",
			client: "Hollywood Production Company",
			borderColor: "border-rose-300/20 hover:border-rose-300/40",
			bgColor: "bg-rose-300/10 group-hover:bg-rose-300/20",
		},
	];

	return (
		<motion.section className="py-24 max-w-7xl mx-auto px-4" {...fadeInUp}>
			<div className="space-y-4 mb-12 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-stone-100 to-stone-400 text-transparent bg-clip-text">
					Client Success Stories
				</h2>
				<p className="text-gray-400 text-lg md:text-xl max-w-2xl">
					Our clients love us. You will too.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{successStories.map((story, index) => (
					<Card
						key={story.title}
						className={cn(
							"backdrop-blur-sm bg-white/5 border transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] overflow-hidden group",
							story.borderColor,
						)}
					>
						<CardHeader className="flex flex-row items-center gap-3 pb-2">
							<div
								className={cn(
									"p-2 rounded-lg transition-colors duration-300",
									story.bgColor,
								)}
							>
								{story.icon}
							</div>
							<CardTitle className="text-2xl font-semibold tracking-tight text-white">
								{story.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-300 leading-relaxed">
								{story.description}
							</p>
						</CardContent>
						<CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
							<blockquote className="text-lg text-gray-300 italic font-light mb-3 leading-relaxed">
								"{story.quote}"
							</blockquote>
							<p className="self-end font-medium text-gray-400">
								— {story.client}
							</p>
						</CardFooter>
					</Card>
				))}
			</div>
		</motion.section>
	);
};

export default ClientBenefits;
