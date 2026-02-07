import type { Messages } from "../../lib/messages";

interface ServicesProps {
  messages?: Messages;
}

export default function Services({ messages }: ServicesProps) {
  const defaultServices = [
    {
      title: "AI Products",
      description: "Build from scratch. LLMs, RAG, agents. Ship in weeks.",
    },
    {
      title: "Product Design",
      description: "Make your AI feel smooth. UX that doesn't suck.",
    },
    {
      title: "AI Integration",
      description: "Plug AI into your existing systems. No chaos.",
    },
    {
      title: "Components",
      description: "Reusable AI modules. Build faster. Stay consistent.",
    },
    {
      title: "Governance",
      description: "Build AI your org can trust. Standards. Consistency.",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
