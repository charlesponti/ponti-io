/**
 * Hero Component - AI Dev & Design Studio
 *
 * Positioning:
 * - Direct, no fluff
 * - Technical + friendly
 * - Gangsta attitude
 */

export default function Hero() {
	return (
		<section className="py-12 md:py-16 flex items-center justify-center min-h-screen">
			<div className="w-full max-w-2xl mx-auto px-6 md:px-12 text-center">
				{/* Main positioning - bold and direct */}
				<h1 className="text-[var(--font-size-hero)] font-bold uppercase leading-[var(--leading-tight)] tracking-[-0.02em] mb-8">
					AI Systems Built For Real Business Problems
				</h1>

				{/* Subheading - what we do */}
				<p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] tracking-[0.02em] leading-[var(--leading-normal)] max-w-[70ch] mx-auto mb-10">
					We design and build AI products for startups, growing companies, and enterprises. No hype. Just shipping systems that move the needle.
				</p>

				{/* CTA */}
				<div className="text-[var(--font-size-meta)] text-[var(--color-sumi-text)]">
					<a 
						href="#client-types"
						className="inline-block px-6 py-3 border border-[var(--color-sumi-secondary)] hover:border-[var(--color-sumi-text)] transition-colors duration-300 tracking-[0.1em] uppercase text-sm"
					>
						Start Building
					</a>
				</div>
			</div>
		</section>
	);
}
