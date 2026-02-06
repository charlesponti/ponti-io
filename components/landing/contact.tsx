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
		<section className="ma-lg">
			<div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
				{/* Terminal prompt */}
				<div className="text-[var(--font-size-meta)] text-[var(--color-sumi-muted)] mb-6">
					$ contact
				</div>

				{/* Email with copy interaction */}
				<div className="flex items-center gap-4">
					<button
						type="button"
						onClick={handleCopy}
						className="text-[var(--font-size-section)] text-[var(--color-sumi-text)] hover:text-[var(--color-sumi-secondary)] transition-colors duration-300 font-mono tracking-[-0.01em]"
						title={copied ? "Copied!" : "Click to copy email"}
					>
						{email}
					</button>

					{copied && (
						<span className="text-[var(--font-size-meta)] text-[var(--color-sumi-muted)] animate-fade-in">
							copied
						</span>
					)}
				</div>

				{/* Alternative contact link */}
				<a
					href={`mailto:${email}`}
					className="block mt-4 text-[var(--font-size-meta)] text-[var(--color-sumi-muted)] hover:text-[var(--color-sumi-text)] transition-colors duration-300"
				>
					or send email directly →
				</a>
			</div>
		</section>
	);
}
