/**
 * Hero Component - AI Dev & Design Studio
 */

import NeuralNetwork from "../neural-network";
import JapaneseSeigaiha from "./japanese-seigaiha";

export default function Hero() {
	return (
		<section className="py-12 md:py-16 flex items-center justify-center min-h-screen font-mono relative">
			<JapaneseSeigaiha />
			<NeuralNetwork />

			<div className="relative z-10 text-center px-6 md:px-12">
				<h1 className="text-[var(--font-size-hero)] font-bold uppercase leading-[var(--leading-tight)] tracking-[-0.02em] mb-10">
					INTELLIGENCE THAT WORKS
				</h1>

				<p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] tracking-[0.02em] leading-[var(--leading-normal)] max-w-[60ch] mx-auto mb-12">
					We build AI products for startups, growing companies, and enterprises.
					<br />
					Ship faster. Scale smarter.
				</p>

				<div>
					<a
						href="#services"
						className="text-[var(--font-size-meta)] text-[var(--color-sumi-text)] font-mono inline-block px-8 py-4 border border-white/30 hover:border-white/70 transition-colors duration-300 tracking-[0.1em] uppercase"
					>
						Start Building
					</a>
				</div>
			</div>
		</section>
	);
}
