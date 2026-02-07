"use client";

import { useState } from "react";

/**
 * Contact Component - Japanese Minimalist Design
 *
 * Philosophy:
 * - Terminal aesthetic for brand consistency
 * - Copy-to-clipboard for ease of use
 * - Shibui (渋い): Subtle hover states
 */

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "cj@ponti.io";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback: open mailto
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="w-full max-w-2xl mx-auto px-6 md:px-12 text-center">
        {/* Terminal prompt */}
        <div className="text-[var(--font-size-meta)] text-muted mb-6">$ contact</div>

        {/* Email with copy interaction */}
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
          <button
            type="button"
            onClick={handleCopy}
            className="text-[var(--font-size-section)] text-foreground hover:text-secondary transition-colors duration-300 font-mono tracking-[-0.01em]"
            title={copied ? "Copied!" : "Click to copy email"}
          >
            {email}
          </button>

          {copied && (
            <span className="text-[var(--font-size-meta)] text-muted animate-fade-in">copied</span>
          )}
        </div>

        {/* Alternative contact link */}
        <a
          href={`mailto:${email}`}
          className="block mt-6 text-[var(--font-size-meta)] text-muted hover:text-foreground transition-colors duration-300"
        >
          or send email directly →
        </a>
      </div>
    </section>
  );
}
