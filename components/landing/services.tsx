import type { Messages } from "@/src/lib/messages";

/**
 * Services Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Dan-sha-ri (断捨離): Eliminate decorative borders
 * - Kanso (簡素): Simple text-only list
 * - Dot-leader format for elegant alignment
 */
type Props = { messages: Messages["Services"] };

const SERVICES = [
	{ name: "Interface Design", description: "AI product UX/UI" },
	{ name: "Design Systems", description: "Scalable components" },
	{ name: "Prototyping", description: "Interactive demos" },
	{ name: "Design Engineering", description: "React/TypeScript" },
] as const;

export default function Services({ messages }: Props) {
	return (
		<section className="ma-lg">
			<div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
				{/* Section label */}
				<div className="text-[var(--font-size-meta)] text-[var(--color-sumi-muted)] uppercase tracking-[0.35em] mb-8">
					{messages.title}
				</div>

				{/* Services list with dot-leader */}
				<div className="space-y-4 max-w-2xl">
					{SERVICES.map((service) => (
						<div
							key={service.name}
							className="flex items-baseline text-[var(--font-size-body)]"
						>
							<span className="text-[var(--color-sumi-text)] uppercase tracking-[0.05em]">
								{service.name}
							</span>
							<span className="flex-1 mx-3 border-b border-dotted border-[var(--color-sumi-muted)] opacity-30" />
							<span className="text-[var(--color-sumi-secondary)] text-[var(--font-size-meta)]">
								{service.description}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
