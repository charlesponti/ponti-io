import { Section } from "@/components/landing/section";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

/**
 * About Component (Server Component)
 *
 * Provides background information about the studio's philosophy and mission.
 * Uses getTranslations from next-intl/server for server-side localization.
 */
export default async function About() {
	const t = await getTranslations("About");

	return (
		<Section>
			{/* Section Header */}
			<h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-12 text-center font-mono">
				{t("title")}
			</h2>

			{/* Main Philosophy - Monochromatic Terminal Style */}
			<div className="space-y-10 text-lg md:text-2xl font-mono text-zinc-100 leading-relaxed text-center uppercase tracking-tighter">
				<p className="max-w-4xl mx-auto">{t("p1")}</p>
				<p className="max-w-4xl mx-auto">{t("p2")}</p>
				<p className="max-w-4xl mx-auto text-zinc-500">{t("p3")}</p>
			</div>

			{/* Primary Action */}
			<div className="pt-16 flex justify-center">
				<Link
					href="mailto:hello@ponti.io"
					className="text-base font-mono font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:bg-white hover:text-black transition-all px-4 py-2"
				>
					{t("cta")}
				</Link>
			</div>
		</Section>
	);
}
