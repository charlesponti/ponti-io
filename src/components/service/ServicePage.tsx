import type { ServiceContent, ServiceKey } from "../../lib/service-pages";

interface ServicePageProps {
  content: ServiceContent;
  slug: ServiceKey;
}

const PATTERN = ["+·+·+·+·+", "·+·+·+·+·", "+·+·+·+·+"].join("\n");

export default function ServicePage({ content, slug }: ServicePageProps) {
  const subject = `SERVICE_${slug.toUpperCase()}`;

  return (
    <section className="void-shell min-h-screen max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20">
      <div className="space-y-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-foreground)]">SERVICE</p>
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-bold uppercase leading-tight tracking-tight mt-4">
            {content.heroTitle}
          </h1>
          <p className="text-base text-[var(--secondary-foreground)] max-w-3xl leading-relaxed mt-4 uppercase tracking-[0.15em]">
            {content.heroSubtitle}
          </p>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-10 flex flex-col gap-6 structural-line">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-foreground)]">
            {content.capabilityTitle}
          </div>
          <p className="text-sm text-[var(--secondary-foreground)] leading-relaxed">{content.capabilityBody}</p>
          <ul className="space-y-3 text-[var(--secondary-foreground)] text-sm leading-snug">
            {content.capabilityHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[var(--muted-foreground)]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-10 space-y-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-foreground)]">EXAMPLES</p>
          <div className="grid gap-6 md:grid-cols-3">
            {content.examples.map((example) => (
              <div key={example.title} className="text-sm text-[var(--secondary-foreground)] leading-relaxed">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-foreground)]">
                  {example.label}
                </p>
                <p className="font-semibold uppercase tracking-[0.08em] mt-2">{example.title}</p>
                <p className="mt-2 text-[var(--secondary-foreground)]">{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="opacity-20 text-[4px] tracking-[0.3em] leading-tight whitespace-pre bg-[var(--muted)] p-4 rounded">
            {PATTERN}
          </div>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-8 max-w-2xl space-y-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-foreground)]">CTA</p>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary-foreground)]">
            {content.ctaSubtext}
          </p>
          <a
            href={`mailto:cj@ponti.io?subject=${subject}`}
            className="inline-flex cursor-crosshair items-center justify-center border border-[var(--border)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em]"
          >
            {content.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
