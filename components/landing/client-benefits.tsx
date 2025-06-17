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
			icon: <LineChart className="h-8 w-8 text-olive-400" />,
			title: "Enterprise Platform Excellence",
			description:
				"Architected premium consumer Teams and executive Business tiers featuring sophisticated role-based governance and collaboration architecture, unlocking substantial new revenue channels.",
			quote:
				"Ponti Studios' exceptional craftsmanship generated $15M+ in new ARR and propelled 13% growth in our consumer base through innovative collaboration features.",
			client: "StreamYard",
			borderColor: "border-olive-400/30 hover:border-olive-400/50",
			bgColor: "bg-olive-400/10 group-hover:bg-olive-400/20",
		},
		{
			icon: <Users className="h-8 w-8 text-sage-400" />,
			title: "Creator Marketplace Distinction",
			description:
				"Designed an exclusive two-sided platform utilizing vector-based recommendations and generative AI conversation starters to elegantly connect creators with their distinguished audience.",
			quote:
				"Our platform now serves over 20K monthly distinguished users with a 40% enhancement in engagement and 300% year-over-year growth in creator collaborations.",
			client: "Collab",
			borderColor: "border-sage-400/30 hover:border-sage-400/50",
			bgColor: "bg-sage-400/10 group-hover:bg-sage-400/20",
		},
		{
			icon: <BarChart3 className="h-8 w-8 text-bone-400" />,
			title: "Music Industry Innovation",
			description:
				"Crafted a comprehensive end-to-end platform for independent musicians to optimize touring and financial management with intelligent route planning, executive dashboards, and audience insights.",
			quote:
				"Revrock significantly optimized our touring expenses and provided invaluable financial clarity through their sophisticated analytical dashboards.",
			client: "Independent Musician",
			borderColor: "border-bone-400/30 hover:border-bone-400/50",
			bgColor: "bg-bone-400/10 group-hover:bg-bone-400/20",
		},
		{
			icon: <BadgeCheck className="h-8 w-8 text-olive-300" />,
			title: "Entertainment Industry Solution",
			description:
				"Led the development of an AI-powered application enabling Hollywood showrunners to efficiently curate writer submissions with automated data extraction and vector-based similarity algorithms.",
			quote:
				"Prolog transformed our candidate curation process, preserving countless hours and helping us discover exceptional writers we might have otherwise overlooked.",
			client: "Hollywood Production Company",
			borderColor: "border-olive-300/30 hover:border-olive-300/50",
			bgColor: "bg-olive-300/10 group-hover:bg-olive-300/20",
		},
	];

	return (
		<motion.section className="py-24 max-w-7xl mx-auto px-4" {...fadeInUp}>
			<div className="space-y-4 mb-12 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-bone-200 to-sage-300 text-transparent bg-clip-text font-serif">
					Distinguished Partnerships
				</h2>
				<p className="text-sage-300 text-lg md:text-xl max-w-2xl font-light">
					Our clients cherish the partnership. You will too.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{successStories.map((story, index) => (
					<Card
						key={story.title}
						className={cn(
							"backdrop-blur-sm bg-charcoal-800/20 border transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] overflow-hidden group",
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
							<CardTitle className="text-2xl font-semibold tracking-tight text-bone-100 font-serif">
								{story.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sage-300 leading-relaxed font-light">
								{story.description}
							</p>
						</CardContent>
						<CardFooter className="flex flex-col items-start border-t border-sage-700/20 pt-4">
							<blockquote className="text-lg text-sage-300 italic font-light mb-3 leading-relaxed font-serif">
								"{story.quote}"
							</blockquote>
							<p className="self-end font-medium text-sage-400">
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
