import { Section } from "@/components/landing/section";
import { ArrowDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

/**
 * Hero Component (Server Component)
 *
 * Displays the primary value proposition and call to action.
 * Uses getTranslations from next-intl/server for server-side localization.
 */
export default async function Hero() {
	const t = await getTranslations("Hero");

	return (
		<Section className="min-h-[90vh] relative">
			<div className="flex flex-col items-center text-center gap-12 pt-20 bg-black/30 backdrop-blur-sm rounded-lg p-8 md:p-12">
				{/* Title - Monochromatic & Bold */}
				<h1 className="text-5xl md:text-8xl tracking-tighter leading-[0.9] text-white font-mono font-bold uppercase whitespace-pre-line">
					{t("title")}
				</h1>

				{/* Description - AI Studio focus */}
				<div className="max-w-2xl mx-auto space-y-6">
					<p className="text-lg md:text-xl font-mono text-zinc-500 leading-relaxed uppercase tracking-tight">
						{t("description")}
					</p>
				</div>
			</div>

			{/* Bounce Indicator */}
			<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
				<ArrowDown className="w-5 h-5 text-white" />
			</div>
		</Section>
	);
}
