/**
 * Hero Component - AI Dev & Design Studio
 */

export default function Hero() {
	return (
		<section className="py-12 md:py-16 flex items-center justify-center min-h-screen font-mono">
			<div className="w-full max-w-3xl mx-auto px-6 md:px-12 text-center">
				{/* Main headline - short and punchy */}
				<h1 className="text-(--font-size-hero) font-bold uppercase leading-[var(--leading-tight)] tracking-[-0.02em] mb-10 font-mono">
					INTELLIGENCE THAT WORKS
				</h1>

				{/* Subheading - benefit focused */}
				<p className="text-(--font-size-body) text-[color:var(--color-sumi-secondary)] tracking-[0.02em] leading-[var(--leading-normal)] max-w-[60ch] mx-auto mb-12 font-mono">
					We build AI products for startups, growing companies, and enterprises.
				</p>

				{/* CTA */}
				<div className="text-(--font-size-meta) text-[color:var(--color-sumi-text)] font-mono">
					<a
						href="#services"
						className="inline-block px-8 py-4 border border-white/30 hover:border-white/70 transition-colors duration-300 tracking-[0.1em] uppercase text-xs"
					>
						Start Building
					</a>
				</div>
			</div>
		</section>
	);
}
