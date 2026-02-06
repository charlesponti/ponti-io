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
		description: "Move fast. We help you build AI products that get your product-market fit.",
		services: [
			{
				title: "LLM Development",
				description: "Custom LLM applications. Prompt engineering. RAG systems that work.",
			},
			{
				title: "AI Product Design",
				description: "UX/UI for AI. Make AI products your customers actually want to use.",
			},
			{
				title: "Product Strategy",
				description: "AI architecture. Scaling strategy. Building for the future.",
			},
		],
	},
	{
		type: "smb",
		title: "Growing Companies",
		description: "Scale smart. Integrate AI into your existing products without the mess.",
		services: [
			{
				title: "AI Integration",
				description: "Bolt AI into your current systems. APIs. Workflows. Done right.",
			},
			{
				title: "Design Systems",
				description: "Reusable AI components. Consistency across your products.",
			},
			{
				title: "AI Product Design",
				description: "Level up your product with AI features users love.",
			},
		],
	},
	{
		type: "enterprise",
		title: "Enterprise",
		description: "Think big. We handle complex AI systems that power your business.",
		services: [
			{
				title: "AI Integration",
				description: "Enterprise-scale AI. Data pipelines. Security. Infrastructure.",
			},
			{
				title: "Product Strategy",
				description: "AI roadmap. Org alignment. Building AI that drives business value.",
			},
			{
				title: "Design Systems",
				description: "AI governance. Consistency. Enterprise standards.",
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
