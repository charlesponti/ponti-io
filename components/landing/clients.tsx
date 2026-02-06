import clientsData from "@/content/clients.json";

/**
 * Clients Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Typography-only approach (no logos)
 * - Ma (間): Generous spacing between items
 * - Trust signals without visual clutter
 */

interface Client {
	name: string;
	url?: string;
}

export default function Clients() {
	const { clients } = clientsData as { clients: Client[] };

	return (
		<section className="ma-lg">
			<div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
				{/* Section label */}
				<div className="text-[var(--font-size-meta)] text-[var(--color-sumi-muted)] uppercase tracking-[0.35em] mb-8">
					Selected Clients
				</div>

				{/* Clients typography list */}
				<div className="flex flex-wrap gap-x-8 gap-y-2 max-w-3xl">
					{clients.map((client) => (
						<a
							key={client.name}
							href={client.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] hover:text-[var(--color-sumi-text)] transition-colors duration-300 tracking-[0.02em]"
						>
							{client.name}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
