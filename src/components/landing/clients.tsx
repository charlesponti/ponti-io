/**
 * Clients component following Japanese minimalism aesthetic:
 * - Sumi ink palette (grayscale)
 * - Ma (generous whitespace) spacing
 * - Monospace typography
 * - Minimal, essential information
 */

import type { Messages } from "../../lib/messages";

interface ClientsProps {
  messages?: Messages;
}

interface ClientProject {
  name: string;
  description: string;
  highlights: string[];
}

interface ClientGroup {
  label: string;
  description?: string;
  projects: ClientProject[];
}

export default function Clients({ messages }: ClientsProps) {
  const clientData = messages?.Clients;
  const clientGroups: ClientGroup[] = clientData?.groups || [];

  return (
    <section className="void-shell py-[var(--ma-lg)] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-[var(--ma-md)] space-y-6">
          <h2 className="text-[var(--font-size-section)] font-bold uppercase tracking-tight">
            {clientData?.title || "Selected Clients"}
          </h2>
          <p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] max-w-2xl leading-[var(--leading-relaxed)]">
            {clientData?.description ||
              "We've worked with ambitious teams reducing complexity to deliver intelligence that matters."}
          </p>
          {clientData?.subtitle && (
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-sumi-muted)]">
              {clientData.subtitle}
            </p>
          )}
        </div>

        {/* Clients Grid */}
        <div className="space-y-[var(--ma-lg)]">
          {clientGroups.map((group) => (
            <div key={group.label} className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <p className="text-[var(--font-size-meta)] uppercase tracking-[0.3em] opacity-60">
                  {group.label}
                </p>
                {group.description && (
                  <p className="text-[10px] uppercase opacity-60">{group.description}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ma-sm)]">
                {group.projects.map((client) => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {clientData?.footer && (
          <div className="mt-[var(--ma-lg)] text-[10px] uppercase tracking-[0.4em] opacity-70">
            <a href="#contact" className="hover:underline">
              {clientData.footer}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: ClientProject }) {
  const name = client.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-4 h-full structural-line">
      <p className="uppercase font-semibold tracking-widest text-[var(--font-size-meta)]">{name}</p>

      {/* Description */}
      <p className="text-[var(--font-size-meta)] text-[var(--color-sumi-secondary)] leading-snug">
        {client.description}
      </p>

      {/* Highlights */}
      <ul className="mt-auto space-y-1.5">
        {client.highlights.map((highlight, idx) => (
          <li key={idx} className="flex gap-2 text-xs leading-tight text-[var(--color-sumi-muted)]">
            <span className="text-[var(--color-sumi-secondary)] flex-shrink-0">→</span>
            <span className="break-words">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
