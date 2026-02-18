export const SERVICE_KEYS = [
  "intelligence",
  "automation",
  "productdesign",
  "connectors",
  "components",
  "governance",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export interface ExampleItem {
  label: string;
  title: string;
  description: string;
}

export interface ServiceContent {
  heroTitle: string;
  heroSubtitle: string;
  capabilityTitle: string;
  capabilityBody: string;
  capabilityHighlights: string[];
  examples: ExampleItem[];
  ctaLabel: string;
  ctaSubtext: string;
}

export function normalizeServiceKey(value?: string): ServiceKey {
  if (!value) {
    return SERVICE_KEYS[0];
  }

  const normalized = value.toLowerCase();
  if (SERVICE_KEYS.includes(normalized as ServiceKey)) {
    return normalized as ServiceKey;
  }

  return SERVICE_KEYS[0];
}
