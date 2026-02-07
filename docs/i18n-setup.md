# i18n

This repo uses a minimal, file-based i18n approach. Translations live in JSON under `/messages` and are loaded server-side and passed into components from pages.

Files and utilities

- `messages/en.json`, `messages/ja.json` — canonical message bundles.
- `src/lib/messages.ts` — types and loader helpers.
- `src/lib/i18n.ts` — small helpers (`useI18n`, `getLocaleFromUrl`).
- `src/layouts/BaseLayout.astro` — layout that detects locale and sets `lang`.

Routing

- Default (no prefix): English (`/`).
- Japanese: `/ja/` (folder under `src/pages`).
  The routing config is in `astro.config.mjs` (see `i18n` section).

Quick usage (Astro pages)

1. Import the i18n helper in a page and get the messages:

```astro
---
import { useI18n } from "../lib/i18n";
const { messages } = useI18n(Astro);
---

<Layout>
  <Hero client:load messages={messages} />
</Layout>
```

1. Pass `messages` into nested components that need copy (React or Astro).

Component patterns

- For static text, prefer to pull strings from `messages.<Section>.<key>`.
- For lists/structured data (clients, services), keep arrays in the message JSON and map them in the component.
- Components should accept an optional `messages` prop and use `messages?.Section?.key` with sensible fallbacks to keep them testable and renderable in isolation.

Example (React component prop types):

```ts
// src/components/landing/hero.tsx
import type { Messages } from "../../lib/messages";
export default function Hero({ messages }: { messages?: Messages }) {
  const hero = messages?.Hero ?? { title: "Intelligence that works." };
  return <h1>{hero.title}</h1>;
}
```

Updating and adding translations

1. Add keys to `messages/en.json`.
2. Add translations to `messages/xx.json` for the new locale.
3. Add the locale code to `astro.config.mjs` → `i18n.locales` and (optionally) create `src/pages/xx/` pages.
4. If you add structured arrays (clients/services) update `messages.ts` TypeScript types if needed.

Message JSON tips

- Keep a flat-ish structure per UI area (e.g. `Hero`, `Services`, `Clients`).
- For arrays, provide full objects in the JSON so components can map directly.
- Avoid runtime-only logic in message files — message files should be pure data.

Testing and local dev

Run dev server and verify both locales are available:

```bash
npm run dev
# English: http://localhost:3000/
# Japanese: http://localhost:3000/ja/
```

Build and prerender check:

```bash
npm run build
```

Notes for contributors

- Pass `messages` explicitly into client components to avoid coupling client-side code to server-only helpers.
- Use the `messages` TypeScript type (`src/lib/messages.ts`) to keep keys discoverable and type-safe in components.
- When adding a new locale, add tests or smoke-checks that the new JSON is valid JSON and that required top-level keys exist.

Where to look

- Layout: `src/layouts/BaseLayout.astro`
- Helpers: `src/lib/messages.ts`, `src/lib/i18n.ts`
- Example usage: `src/pages/index.astro`, `src/pages/ja/index.astro`

If you want, I can:

- Add a linter script to validate message keys across locales.
- Add a small test that ensures `messages/en.json` and `messages/ja.json` have matching keys.

— End of developer i18n guide
