/**
 * Services Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Kanso (簡素): Simple text-only list
 * - Ma (間): Generous spacing between items
 * - All services available to every client type
 */

const services = [
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
    title: "Strategy",
    description: "Plan your AI roadmap. Scale without breaking.",
  },
  {
    title: "AI Systems",
    description: "Enterprise-grade AI infrastructure. Security. Scale.",
  },
  {
    title: "Governance",
    description: "Build AI your org can trust. Standards. Consistency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="w-full max-w-2xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-[var(--font-size-section)] text-foreground uppercase tracking-[-0.01em] mb-4 font-bold">
            Services
          </h2>
          <p className="text-[var(--font-size-body)] text-secondary leading-[var(--leading-normal)]">
            We build AI. It works. It ships.
          </p>
        </div>

        {/* Services list - numbered with leading zeros */}
        <div className="space-y-8 text-left">
          {services.map((service, index) => (
            <div key={service.title}>
              {/* Number */}
              <span className="text-[var(--font-size-meta)] text-muted">
                {String(index + 1).padStart(2, "0")}.
              </span>{" "}
              {/* Title */}
              <span className="text-[var(--font-size-body)] text-foreground font-bold">
                {service.title}
              </span>
              {/* Description on new line */}
              <div className="mt-2 ml-6 text-[var(--font-size-meta)] text-secondary leading-[var(--leading-relaxed)]">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
