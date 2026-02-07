"use client";

import type { Messages } from "../../lib/messages";

interface ContactProps {
  messages?: Messages;
}

/**
 * Contact Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Terminal aesthetic for brand consistency
 * - Copy-to-clipboard for ease of use
 * - Shibui (渋い): Subtle hover states
 */

export default function Contact({ messages }: ContactProps) {
  const buttonLabel = messages?.Contact?.buttonLabel || "INITIALIZE_CONTACT";

  return (
    <section className="py-12 md:py-16">
      <div className="w-full max-w-2xl mx-auto px-6 md:px-12 text-center">
        <a
          href="mailto:cj@ponti.io?subject=INITIALIZE_CONTACT"
          className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-[0.08em] hover:bg-white/90 active:bg-white/80"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
