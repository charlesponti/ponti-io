"use client";

import AnimatedASCII from "./animated-ascii";
import ServiceCard from "./service-card";

type ClientTypeConfig = {
	type: "startups" | "smb" | "enterprise";
	title: string;
	description: string;
	services: Array<{ title: string; description: string }>;
};

const clientTypes: ClientTypeConfig[] = [
	{
		type: "startups",
		title: "Startups",
		description: "Get to market fast with AI that users love.",
		services: [
			{
				title: "AI Products",
				description: "Build from scratch. LLMs, RAG, agents. Ship in weeks.",
			},
			{
				title: "Product Design",
				description: "Make your AI feel smooth. UX that doesn't suck.",
			},
			{
				title: "Strategy",
				description: "Plan your AI roadmap. Scale without breaking.",
			},
		],
	},
	{
		type: "smb",
		title: "Growing Companies",
		description: "Add AI to what you've built. Keep momentum.",
		services: [
			{
				title: "AI Integration",
				description: "Plug AI into your existing systems. No chaos.",
			},
			{
				title: "Components",
				description: "Reusable AI modules. Build faster. Stay consistent.",
			},
			{
				title: "Product Design",
				description: "Level up with AI features. Your users will notice.",
			},
		],
	},
	{
		type: "enterprise",
		title: "Enterprise",
		description: "Complex AI at scale. Done right.",
		services: [
			{
				title: "AI Systems",
				description: "Enterprise-grade AI infrastructure. Security. Scale.",
			},
			{
				title: "Strategy",
				description: "AI that drives revenue. Org alignment. Execution.",
			},
			{
				title: "Governance",
				description: "Build AI your org can trust. Standards. Consistency.",
			},
		],
	},
];

export default function ClientTypes() {
	return (
		<section id="client-types" className="py-12 md:py-16">
			<div className="w-full max-w-6xl mx-auto px-6 md:px-12">
				{clientTypes.map((client) => (
					<div key={client.type} className="mb-20 md:mb-28">
						{/* Client Type Header with ASCII */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10">
							{/* ASCII Animation */}
							<div className="flex items-center justify-center md:justify-start h-40">
								<AnimatedASCII type={client.type} />
							</div>

							{/* Positioning */}
							<div className="flex flex-col justify-center">
								<h2 className="text-[var(--font-size-section)] text-[var(--color-sumi-text)] uppercase tracking-[-0.01em] mb-4 font-bold">
									{client.title}
								</h2>
								<p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] leading-[var(--leading-normal)]">
									{client.description}
								</p>
							</div>
						</div>

						{/* Services Grid - 3 columns */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{client.services.map((service) => (
								<ServiceCard
									key={service.title}
									title={service.title}
									description={service.description}
								/>
							))}
						</div>

						{/* Divider */}
						{client.type !== "enterprise" && (
							<div className="mt-16 border-t border-white/5" />
						)}
					</div>
				))}
			</div>
		</section>
	);
}
