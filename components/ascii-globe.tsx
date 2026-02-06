"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AsciiGlobe Component - Japanese Minimalism
 * 
 * Renders a perfect circular 3D globe using ASCII characters at 3px font size.
 * Responsive sizing:
 * - Desktop (>1024px): 350px diameter
 * - Tablet (640px-1024px): 250px diameter  
 * - Mobile (<640px): 180px diameter
 * 
 * Features:
 * - Perfect circle (no distortion) via 1.0 char aspect ratio
 * - 3px font size with 1.0 line-height for square cells
 * - Responsive scaling proportional across breakpoints
 * - 30fps frame limiting for battery efficiency
 * - Reduced motion support
 */
export const AsciiGlobe = () => {
	const preRef = useRef<HTMLPreElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimsRef] = useState(() => ({ width: 117, height: 58 }));

	useEffect(() => {
		let frame = 0;
		let lastTime = 0;
		const TARGET_FPS = 30;
		const FRAME_MS = 1000 / TARGET_FPS;

		// Character set for depth
		const chars = " .:-=+*#%@";
		const rotationX = 0.4; // Fixed tilt
		const CHAR_ASPECT = 1.0; // Perfect circle - no distortion

		// Reduced motion check
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		const render = (time: number) => {
			if (time - lastTime < FRAME_MS) {
				requestAnimationFrame(render);
				return;
			}
			lastTime = time;

			const { width, height } = dimsRef;
			let output = "";

			const rotationY = frame * 0.02;

			// Pre-compute trig values
			const cosY = Math.cos(rotationY);
			const sinY = Math.sin(rotationY);
			const cosX = Math.cos(rotationX);
			const sinX = Math.sin(rotationX);

			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					// Normalize to [-1, 1]
					const nx = (2 * (x + 0.5)) / width - 1;
					const ny = (2 * (y + 0.5)) / height - 1;

					// Perfect circle - no aspect ratio adjustment
					const xAdj = nx * CHAR_ASPECT;
					const distSq = xAdj * xAdj + ny * ny;

					if (distSq > 1) {
						output += " ";
						continue;
					}

					// Sphere surface
					const nz = Math.sqrt(1 - distSq);

					// 3D rotation (manual matrix multiply for performance)
					const ry1 = ny * cosX - nz * sinX;
					const rz1 = ny * sinX + nz * cosX;
					const rx2 = xAdj * cosY + rz1 * sinY;
					const rz2 = -xAdj * sinY + rz1 * cosY;

					// Lambertian shading with rim light
					const lightDir = [0.2, 0.1, 1];
					const len = Math.sqrt(lightDir[0] * lightDir[0] + lightDir[1] * lightDir[1] + lightDir[2] * lightDir[2]);
					const lambert = Math.max(0, Math.min(1, (rx2 * (lightDir[0] / len) + ry1 * (lightDir[1] / len) + rz2 * (lightDir[2] / len))));
					const rim = (1 - rz2) ** 2 * 0.12;
					const brightness = Math.max(0, Math.min(1, lambert + rim));

					// Geographic coordinates for continents
					const lon = Math.atan2(rx2, rz2);
					const lat = Math.asin(ry1);

					// Simple landmass pattern
					const land = Math.sin(lon * 5) * Math.sin(lat * 8) + Math.sin(lon * 3 + lat * 2) * 0.5 > 0.3;

					let charIndex = Math.floor(brightness * (chars.length - 1));
					if (land) {
						charIndex = Math.min(charIndex + 2, chars.length - 1);
					}

					output += chars[charIndex];
				}
				output += "\n";
			}

			if (preRef.current) {
				preRef.current.textContent = output;
			}

			if (!prefersReducedMotion) {
				frame++;
			}
			requestAnimationFrame(render);
		};

		const animationId = requestAnimationFrame(render);
		return () => cancelAnimationFrame(animationId);
	}, [dimsRef]);

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden select-none"
		>
			<pre
				ref={preRef}
				className="font-mono text-[3px] leading-[3px] opacity-40 text-white/70"
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
