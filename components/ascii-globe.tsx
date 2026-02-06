"use client";

import React, { useEffect, useRef } from "react";

/**
 * AsciiGlobe Component
 * Renders a rotating 3D globe using ASCII characters.
 * Optimized for visibility and performance in a monochromatic theme.
 */
export const AsciiGlobe = () => {
	const preRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		// Character set for depth and texture
		const chars = " .:-=+*#%@";
		let frame = 0;
		let lastTime = 0;

		const render = (time: number) => {
			// Throttle to ~30fps for better battery life/performance on background task
			if (time - lastTime < 32) {
				requestAnimationFrame(render);
				return;
			}
			lastTime = time;

			// Dimensions adjusted for balance between detail and performance
			const width = 100;
			const height = 50;
			let output = "";

			const rotationY = frame * 0.02;
			const rotationX = 0.4; // Fixed tilt

			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					// Normalize coordinates to [-1, 1]
					const nx = (x / width) * 2 - 1;
					const ny = (y / height) * 2 - 1;

					// Adjust for aspect ratio (monospaced characters are typically taller)
					const xAdj = nx * (width / height) * 0.6;

					const distSq = xAdj * xAdj + ny * ny;

					// Inside the sphere
					if (distSq < 0.8) {
						const nz = Math.sqrt(0.8 - distSq);

						// 3D Rotations
						// Rotation around X (tilt)
						const ry1 = ny * Math.cos(rotationX) - nz * Math.sin(rotationX);
						const rz1 = ny * Math.sin(rotationX) + nz * Math.cos(rotationX);

						// Rotation around Y (spinning)
						const rx2 = xAdj * Math.cos(rotationY) + rz1 * Math.sin(rotationY);
						const rz2 = -xAdj * Math.sin(rotationY) + rz1 * Math.cos(rotationY);

						// Shading calculation based on normal vector and imaginary light source
						const light = rx2 * 0.3 + ry1 * 0.3 + rz2 * 0.8;
						const brightness = Math.max(0, Math.min(1, (light + 1) / 2));

						// Geographic feature simulation (Land vs Water)
						const lon = Math.atan2(rx2, rz2);
						const lat = Math.acos(ry1 / Math.sqrt(0.8));

						// "Noisy" landmass pattern
						const land =
							Math.sin(lon * 5) * Math.sin(lat * 8) +
								Math.sin(lon * 3 + lat * 2) * 0.5 >
							0.3;

						let charIndex = Math.floor(brightness * (chars.length - 1));

						// Increase density/brightness for landmasses
						if (land) {
							charIndex = Math.min(charIndex + 3, chars.length - 1);
						}

						output += chars[charIndex];
					} else {
						output += " ";
					}
				}
				output += "\n";
			}

			if (preRef.current) {
				preRef.current.textContent = output;
			}
			frame++;
			requestAnimationFrame(render);
		};

		const animationId = requestAnimationFrame(render);
		return () => cancelAnimationFrame(animationId);
	}, []);

	return (
		<div className="fixed inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden select-none">
			<pre
				ref={preRef}
				className="font-mono text-[10px] leading-[9px] sm:text-[12px] sm:leading-[11px] md:text-[14px] md:leading-[12px] opacity-[0.35] text-white transition-opacity duration-1000"
			/>
		</div>
	);
};

export default AsciiGlobe;
