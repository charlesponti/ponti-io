"use client";

import React, { useEffect, useRef, useState } from "react";

type ClientType = "startups" | "smb" | "enterprise";

interface AnimatedASCIIProps {
	type: ClientType;
}

/**
 * AnimatedASCII Component
 * Renders different ASCII art for each client type
 * - Startups: Rocket/Growth chart
 * - SMB: Building/Gear
 * - Enterprise: Network/Grid
 */
export default function AnimatedASCII({ type }: AnimatedASCIIProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		let animationId: number;
		let frame = 0;

		const animate = () => {
			frame += 1;
			setRotation((frame * 2) % 360);
			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationId);
	}, []);

	const asciiMap: Record<ClientType, string> = {
		startups: `
    /\\
   /  \\
  / AI \\
 /______\\
   |  |
   |  |
  _|  |_
 |      |`,
		smb: `
  +------+
  |      |
  | AI   |
  |      |
  +------+
  |  ||  |
  |  ||  |
  |--++--|
  |      |`,
		enterprise: `
  +--+--+--+
  |  |  |  |
  +--+--+--+
  |  |  |  |
  +--+--+--+
  |  |  |  |
  +--+--+--+`,
	};

	return (
		<div
			ref={containerRef}
			className="flex items-center justify-center"
			style={{
				opacity: 0.4,
				transform: `rotateZ(${rotation * 0.1}deg)`,
				transition: "transform 0.05s linear",
			}}
		>
			<pre className="font-mono text-[3px] leading-[3px] text-white/70 whitespace-pre">
				{asciiMap[type]}
			</pre>
		</div>
	);
}
