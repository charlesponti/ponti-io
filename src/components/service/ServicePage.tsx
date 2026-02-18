import {
  Briefcase,
  Building2,
  Coffee,
  Factory,
  HardDrive,
  Home,
  Hospital,
  Landmark,
  ShieldCheck,
  Store,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceContent, ServiceKey } from "../../lib/service-pages";
import ServiceAsciiTexture from "./ServiceAsciiTexture";

interface ServicePageProps {
  content: ServiceContent;
  slug: ServiceKey;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Coffee,
  Factory,
  HardDrive,
  Home,
  Hospital,
  Landmark,
  ShieldCheck,
  Store,
  Truck,
  Wrench,
};

export default function ServicePage({ content, slug }: ServicePageProps) {
  const subject = `SERVICE_${slug.toUpperCase()}`;

  return (
    <section className="void-shell min-h-screen max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20">
      <div className="space-y-14 md:space-y-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">SERVICE</p>
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-bold uppercase leading-tight tracking-tight mt-4">
            {content.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-[var(--secondary-foreground)] max-w-3xl leading-relaxed mt-4 uppercase tracking-[0.08em]">
            {content.heroSubtitle}
          </p>
          <div className="mt-10">
            <ServiceAsciiTexture seed={content.asciiSeed} />
          </div>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-8 flex flex-col gap-5">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
            {content.capabilityTitle}
          </div>
          <p className="text-base text-[var(--secondary-foreground)] leading-relaxed">{content.capabilityBody}</p>
          <ul className="space-y-3 text-[var(--secondary-foreground)] text-sm leading-snug">
            {content.capabilityHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[var(--muted-foreground)]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-8 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">EXAMPLES</p>
          <div className="flex flex-col gap-6">
            {content.examples.map((example) => (
              <div
                key={`${example.label}-${example.title}`}
                className="flex items-start gap-3 border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0"
              >
                {(() => {
                  const Icon = ICON_MAP[example.icon] || Briefcase;
                  return (
                    <Icon
                      size={16}
                      strokeWidth={1.75}
                      className="mt-0.5 flex-shrink-0 text-[var(--muted-foreground)]"
                      aria-hidden
                    />
                  );
                })()}
                <div className="text-[var(--secondary-foreground)] leading-relaxed">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
                    {example.label}
                  </p>
                  <p className="font-semibold uppercase tracking-[0.06em] mt-2 text-sm md:text-base">
                    {example.title}
                  </p>
                  <p className="mt-1.5 text-sm md:text-base text-[var(--secondary-foreground)] leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[var(--border)] p-6 md:p-8 max-w-3xl space-y-5">
          <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">NEXT ACTION</p>
          <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.06em] text-[var(--foreground)]">
            {content.ctaLabel}
          </p>
          <p className="text-sm md:text-base uppercase tracking-[0.08em] text-[var(--secondary-foreground)]">
            {content.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <a
              href={`mailto:cj@ponti.io?subject=${subject}`}
              className="inline-flex cursor-crosshair items-center justify-center bg-white text-black px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em]"
            >
              OPEN BRIEFING CHANNEL
            </a>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              RESPONSE WINDOW: 24-48H
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
