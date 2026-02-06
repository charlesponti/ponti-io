import type { Messages } from "@/src/lib/messages";

/**
 * Hero Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Ma (間): Generous whitespace
 * - Kanso (簡素): No decorative borders
 * - Asymmetric balance: Offset 15% from center
 */
type Props = { messages: Messages["Hero"] };

export default function Hero({ messages }: Props) {
	return (
		<section className="min-h-[90vh] flex items-center ma-lg">
			<div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
				{/* Asymmetric offset - Japanese design principle */}
				<div className="md:ml-[15%] lg:ml-[20%] max-w-3xl">
					{/* Main headline with dramatic scale */}
					<h1 className="text-[var(--font-size-hero)] font-bold uppercase leading-[var(--leading-tight)] tracking-[-0.02em] mb-8">
						{messages.title}
					</h1>

					{/* Positioning statement - one sentence */}
					<p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] uppercase tracking-[0.1em] leading-[var(--leading-normal)] max-w-[60ch]">
						We design AI systems that disappear.
					</p>

					{/* Terminal status - minimal */}
					<div className="mt-12 text-[var(--font-size-meta)] text-[var(--color-sumi-muted)]">
						<pre className="font-mono leading-[var(--leading-snug)]">
							{`$ status
> accepting projects: Q2 2026
> response: < 24h`}
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
}
