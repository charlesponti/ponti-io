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
			<div className="flex flex-col items-center text-center gap-12 pt-20">
				{/* Title - Monochromatic & Bold */}
				<h1 className="text-5xl md:text-8xl tracking-tighter leading-[0.9] text-white font-mono font-bold uppercase whitespace-pre-line">
					{t("title")}
				</h1>

				{/* Technical/Terminal Illustration Placeholder */}
				<div className="w-full max-w-md aspect-[4/3] relative my-8 grayscale opacity-80 hover:opacity-100 transition-opacity duration-700">
					<div className="absolute inset-0 border border-zinc-800 bg-zinc-900/40 flex items-center justify-center text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em] overflow-hidden">
						{/* Minimalist Grid Overlay */}
						<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
							<div className="w-full h-px bg-zinc-800 absolute top-1/4" />
							<div className="w-full h-px bg-zinc-800 absolute top-2/4" />
							<div className="w-full h-px bg-zinc-800 absolute top-3/4" />
							<div className="h-full w-px bg-zinc-800 absolute left-1/4" />
							<div className="h-full w-px bg-zinc-800 absolute left-2/4" />
							<div className="h-full w-px bg-zinc-800 absolute left-3/4" />
						</div>
						[visual.interface_active]
					</div>
				</div>

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
