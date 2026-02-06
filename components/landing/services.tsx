import { Section } from "@/components/landing/section";
import { getTranslations } from "next-intl/server";

const SERVICE_KEYS = ["strategy", "llm", "agentic", "data"] as const;

/**
 * Services Component (Server Component)
 *
 * Displays the core capabilities of the studio.
 * Uses getTranslations from next-intl/server for server-side localization.
 */
export default async function Services() {
	const t = await getTranslations("Services");

	return (
		<Section>
			{/* Section Header */}
			<h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-12 text-center font-mono">
				{t("title")}
			</h2>

			{/* Capabilities List - Monochromatic & Minimalist */}
			<div className="flex flex-col gap-0 w-full">
				{SERVICE_KEYS.map((key) => (
					<div
						key={key}
						className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-10 border-b border-zinc-800 last:border-0 hover:bg-zinc-900/40 transition-all px-6 cursor-default"
					>
						{/* Capability Title */}
						<h3 className="text-2xl md:text-4xl font-mono font-bold text-white group-hover:translate-x-2 transition-transform uppercase">
							{t(`items.${key}.title`)}
						</h3>

						{/* Capability Description */}
						<p className="text-zinc-500 font-mono text-sm md:text-right max-w-sm uppercase leading-relaxed">
							{t(`items.${key}.description`)}
						</p>
					</div>
				))}
			</div>
		</Section>
	);
}
