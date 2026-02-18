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
  const buttonLabel = messages?.Contact?.buttonLabel || "LAUNCH A GUIDED AI BRIEFING";
  const subtext = messages?.Contact?.subtext || "We reply within 24 hours with a 30-minute discovery call.";

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="w-full max-w-2xl mx-auto px-6 md:px-12 text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] opacity-60">{subtext}</p>
        <a
          href="mailto:cj@ponti.io?subject=GUIDED_AI_BRIEFING"
          className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-[0.08em] hover:bg-white/90 active:bg-white/80"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
