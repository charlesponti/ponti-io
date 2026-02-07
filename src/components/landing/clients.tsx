/**
 * Clients component following Japanese minimalism aesthetic:
 * - Sumi ink palette (grayscale)
 * - Ma (generous whitespace) spacing
 * - Monospace typography
 * - Minimal, essential information
 */

interface ClientProject {
  name: string;
  description: string;
  highlights: string[];
}

const CLIENTS: ClientProject[] = [
  {
    name: "Lumina Industries",
    description: "Enterprise platform engineering and search architecture",
    highlights: [
      "Semantic search ranking system improving content discovery relevance",
      "Student performance dashboard increasing course completion rates",
      "Frontend modernization reducing bundle size and time-to-interactive",
    ],
  },
  {
    name: "StreamYard",
    description: "Creator collaboration marketplace with AI matching",
    highlights: [
      "$15M+ ARR unlocked through consumer & enterprise feature launches",
      "300% YoY creator collaboration growth via AI-powered recommendations",
      "Scaled platform to serve 20K+ monthly active creators",
    ],
  },
  {
    name: "Revrock",
    description: "End-to-end tour optimization platform for indie musicians",
    highlights: [
      "Tour route optimization reducing travel costs and logistics overhead",
      "Financial dashboards enabling real-time tour profitability tracking",
      "Spotify integration enabling data-driven venue and market selection",
    ],
  },
  {
    name: "Prolog",
    description: "AI-powered writer submission triage platform",
    highlights: [
      "LLM email parser cutting manual data entry time by 90%",
      "Vector similarity search enabling instant qualified candidate discovery",
      "Streamlined review workflow reducing evaluation time significantly",
    ],
  },
  {
    name: "Whistle",
    description: "Privacy-focused video conferencing for movement education",
    highlights: [
      "Privacy-first platform enabling sensitive movement instruction safely",
      "Adaptive quality system ensuring reliable teaching during emergencies",
      "Enabled NYC ballet school operations continuity during COVID-19",
    ],
  },
  {
    name: "Kensho",
    description: "Data engineering platform transformation leadership",
    highlights: [
      "Cloud migration reducing monthly infrastructure costs and complexity",
      "Led 15-person team establishing scalable data architecture",
      "Dramatically faster ETL processing supporting massive-scale operations",
    ],
  },
  {
    name: "Humana",
    description: "Senior healthcare platform and mobile engineering",
    highlights: [
      "Mobile experience driving senior healthcare member engagement",
      "User research practices improving feature adoption and satisfaction",
      "Personalized healthcare matching connecting members with right providers",
    ],
  },
  {
    name: "Mimecast",
    description: "Enterprise email security policy management",
    highlights: [
      "Global security management platform for enterprise deployments",
      "White-label theming enabling partner customization at scale",
      "Internationalization system supporting global deployment",
    ],
  },
  {
    name: "Glow Digital",
    description: "Social advertising platform with automation",
    highlights: [
      "API strategy reducing third-party costs by 90% without data loss",
      "Automation system saving advertisers hours of manual optimization weekly",
      "Campaign optimization platform increasing ad performance and ROI",
    ],
  },
  {
    name: "Thomson Reuters",
    description: "Enterprise deployment and monitoring platform",
    highlights: [
      "Global platform enabling secure enterprise application deployment",
      "Fine-grained access control ensuring regulatory compliance",
      "Dashboards improving high-stakes decision-making and trading outcomes",
    ],
  },
  {
    name: "Collab",
    description: "Analytics platform for user engagement tracking",
    highlights: [
      "Engagement analytics informing product decisions with real data",
      "Performance benchmarking enabling cohort-based insights",
      "Feedback systems closing user insight loop for teams",
    ],
  },
  {
    name: "Help Refugees",
    description: "Volunteer resource management interface",
    highlights: [
      "React application managing volunteer coordination efficiently",
      "Data integrity systems protecting sensitive refugee information",
      "Learning from iteration improving future project execution",
    ],
  },
  {
    name: "Komi",
    description: "Community platform for entrepreneurship",
    highlights: [
      "Event architecture connecting entrepreneurs for collaboration",
      "Mentorship network enabling guidance and knowledge sharing",
      "Designed for sustainable community growth and engagement",
    ],
  },
  {
    name: "Manual.co",
    description: "Menopause symptom checker interface",
    highlights: [
      "NLP symptom analysis providing personalized care recommendations",
      "Medical data integration ensuring clinical accuracy",
      "Clear guidance helping patients understand care paths",
    ],
  },
  {
    name: "Mary Sabo",
    description: "Practitioner business tools",
    highlights: [
      "Scheduling system reducing calendar management friction",
      "Payment processing enabling seamless financial transactions",
      "Client management tools improving practitioner-client relationships",
    ],
  },
  {
    name: "Peterson Academy",
    description: "Frontend modernization to Svelte 5",
    highlights: [
      "32% improvement in time-to-interactive for students",
      "Eliminated hydration mismatches improving deployment reliability",
      "Modern architecture improving developer maintainability",
    ],
  },
  {
    name: "Rocco",
    description: "Travel planning with social features",
    highlights: [
      "Trip planning interface making itinerary creation effortless",
      "Social discovery feed connecting travelers with shared interests",
      "Mobile proposal enabling travel management on-the-go",
    ],
  },
  {
    name: "V School",
    description: "Full-stack coding bootcamp curriculum",
    highlights: [
      "Hands-on curriculum preparing developers for production work",
      "Project-based learning modules accelerating skill development",
      "Dev Shop capstones building real portfolio through real projects",
    ],
  },
];

export default function Clients() {
  return (
    <section className="void-shell py-[var(--ma-lg)] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-[var(--ma-md)] space-y-6">
          <h2 className="text-[var(--font-size-section)] font-bold uppercase tracking-tight">
            Selected Clients
          </h2>
          <p className="text-[var(--font-size-body)] text-[var(--color-sumi-secondary)] max-w-2xl leading-[var(--leading-relaxed)]">
            We've worked with ambitious teams reducing complexity to deliver intelligence that
            matters.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ma-sm)]">
          {CLIENTS.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: ClientProject }) {
  const name = client.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-4 h-full">
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
            <span className="truncate" title={highlight}>
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
