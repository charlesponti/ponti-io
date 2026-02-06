/**
 * ServiceCard Component
 * Displays a single service with description
 * Minimal, opaque card with hover effects
 */

interface ServiceCardProps {
	title: string;
	description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
	return (
		<div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
			<h4 className="text-[var(--font-size-meta)] text-[var(--color-sumi-text)] uppercase tracking-[0.05em] mb-2 font-bold">
				{title}
			</h4>
			<p className="text-[var(--font-size-meta)] text-[var(--color-sumi-secondary)] leading-[var(--leading-relaxed)]">
				{description}
			</p>
		</div>
	);
}
