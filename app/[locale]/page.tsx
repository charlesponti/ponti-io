import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import { Section } from "@/components/landing/section";
import Services from "@/components/landing/services";
import { getTranslations } from "next-intl/server";

/**
 * Home Page (Server Component)
 *
 * Uses getTranslations from next-intl/server to resolve translations
 * on the server, ensuring better performance and full compatibility
 * with Next.js 15 routing.
 */
export default async function Home() {
	const t = await getTranslations("Footer");

	return (
		<>
			<Hero />
			<Services />
			<About />

			{/* Footer / Copyright - Monochromatic Terminal Style */}
			<Section className="py-12 border-t border-zinc-800 mt-12 opacity-50">
				<p className="font-mono text-sm uppercase tracking-widest">
					{t("rights", { year: new Date().getFullYear() })}
				</p>
			</Section>
		</>
	);
}
