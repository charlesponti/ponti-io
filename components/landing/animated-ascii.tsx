"use client";

type ClientType = "startups" | "smb" | "enterprise";

interface AnimatedASCIIProps {
	type: ClientType;
}

/**
 * AnimatedASCII Component
 * Renders different ASCII art for each client type with CSS rotation
 * - Startups: Rocket
 * - SMB: Building
 * - Enterprise: Network/Grid
 */
export default function AnimatedASCII({ type }: AnimatedASCIIProps) {
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
		<div className="flex items-center justify-center opacity-40 animate-slow-rotate">
			<pre className="font-mono text-[3px] leading-[3px] text-white/70 whitespace-pre">
				{asciiMap[type]}
			</pre>
		</div>
	);
}
