import type { Messages } from "../../lib/messages";

interface ServicesProps {
  messages?: Messages;
}

interface ServiceItem {
  title: string;
  description: string;
  slug?: string;
}

export default function Services({ messages }: ServicesProps) {
  const defaultServices: ServiceItem[] = [
    {
      title: "Intelligence",
      description: "Surface hidden signals so you can act before blind spots become problems.",
      slug: "intelligence",
    },
    {
      title: "Automation",
      description: "Free your team from repetitive ops so they focus on high-leverage work.",
      slug: "automation",
    },
    {
      title: "Product Design",
      description: "Craft interfaces that guide humans through AI interactions with confidence.",
      slug: "productDesign",
    },
    {
      title: "Connectors",
      description: "Build custom wiring so every model stays synced with your stack, data, and guardrails.",
      slug: "connectors",
    },
    {
      title: "Components",
      description: "Deploy ready-to-use automation modules so each launch reuses trusted logic.",
      slug: "components",
    },
    {
      title: "Governance",
      description: "Lock in runtime guardrails and audits so compliance never slips.",
      slug: "governance",
    },
  ];

  const servicesData = messages?.Services || {
    sectionLabel: "[01_SERVICES]",
    sectionTitle: "We build AI. It works. It ships.",
    items: defaultServices,
  };

  const services = servicesData.items;

  return (
    <section id="services" className="py-32 md:py-48 max-w-screen-md w-full mx-auto px-6 md:px-12">
      <div className="mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.4em] mb-6 font-bold opacity-50">
          {servicesData.sectionLabel}
        </h2>
        <p className="text-2xl md:text-3xl font-light italic opacity-90">
          {servicesData.sectionTitle}
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-item flex items-start gap-6 md:gap-8 structural-line first:border-t-0"
          >
            <span className="text-xs opacity-30 mt-1">{String(index + 1).padStart(2, "0")}.</span>
            <div>
              <h3 className="text-xl font-bold uppercase mb-3 tracking-[0.04em]">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                {service.description}
              </p>
              {service.slug && (
                <a
                  href={`/services/${service.slug}`}
                  className="text-[10px] uppercase tracking-[0.4em] mt-4 inline-flex text-[var(--muted-foreground)]"
                >
                  EXPLORE {service.title} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
