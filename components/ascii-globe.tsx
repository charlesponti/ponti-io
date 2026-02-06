"use client";

import React, { useEffect, useRef } from "react";

/**
 * AsciiGlobe Component - Japanese Minimalism
 *
 * Renders a simple rotating globe using CSS animation
 * - Fixed size: 350px diameter
 * - 3px font size with 3px line-height for square cells
 * - 30fps frame limiting for battery efficiency (optional, using CSS instead)
 * - Reduced motion support
 */
export const AsciiGlobe = () => {
	const preRef = useRef<HTMLPreElement>(null);
	const dimsRef = useRef({ width: 117, height: 58 });

	useEffect(() => {
		const { width, height } = dimsRef.current;
		let output = "";

		// Simple circular pattern instead of complex 3D
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				// Normalize to [-1, 1]
				const nx = (2 * (x + 0.5)) / width - 1;
				const ny = (2 * (y + 0.5)) / height - 1;

				// Check if point is in circle
				const dist = Math.sqrt(nx * nx + ny * ny);
				if (dist > 0.95) {
					output += " ";
					continue;
				}

				// Simple radial brightness pattern
				const brightness = 1 - dist * 0.8;
				const charIndex = Math.floor(brightness * 9);
				const chars = " .:-=+*#%@";
				output += chars[Math.min(charIndex, chars.length - 1)];
			}
			output += "\n";
		}

		if (preRef.current) {
			preRef.current.textContent = output;
		}
	}, []);

	return (
		<div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden select-none">
			<pre
				ref={preRef}
				className="font-mono text-[3px] leading-[3px] opacity-40 text-white/70 animate-slow-rotate"
				aria-hidden="true"
				style={{
					width: "350px",
					height: "350px",
					margin: "0",
					padding: "0",
				}}
			/>
			<span className="sr-only">
				A spinning globe of Earth rendered with ASCII characters
			</span>
		</div>
	);
};

export default AsciiGlobe;
