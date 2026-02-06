"use client";

import React, { useEffect, useRef, useState } from "react";

const commands = [
	{ text: "$ ponti studio --init", delay: 0 },
	{
		text: "> analyzing business requirements...",
		delay: 1500,
		result: "✓ patterns identified",
	},
	{
		text: "> designing ai architecture...",
		delay: 2800,
		result: "✓ neural architecture complete",
	},
	{
		text: "> building intelligent systems...",
		delay: 4200,
		result: "✓ components tested & deployed",
	},
	{ text: "> initializing ponti-studio...", delay: 5600 },
	{ text: "[PONTI] systems operational", delay: 6500 },
];

const asciiLogo = `
   ╱───╲
  ╱  ◉  ╲
 ╱        ╲
──────────
> systems operational
`;

const codeRain = [
	"0",
	"1",
	"0",
	"1",
	"0",
	"1",
	"1",
	"0",
	"1",
	"0",
	"0",
	"1",
	"0",
	"0",
	"1",
	"1",
	"0",
	"0",
	"1",
	"1",
	"0",
	"1",
	"0",
	"0",
	"0",
];

export default function HeroTerminal() {
	const [visibleLines, setVisibleLines] = useState<number[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timeouts: NodeJS.Timeout[] = [];

		commands.forEach((cmd, index) => {
			const showTimeout = setTimeout(() => {
				setVisibleLines((prev) => [...prev, index]);
			}, cmd.delay);

			timeouts.push(showTimeout);

			if (cmd.result) {
				const resultTimeout = setTimeout(() => {
					setVisibleLines((prev) => [...prev, index]);
				}, cmd.delay + 800);
				timeouts.push(resultTimeout);
			}
		});

		return () => timeouts.forEach(clearTimeout);
	}, []);

	return (
		<div className="relative" ref={containerRef}>
			{/* Terminal window */}
			<div className="relative mx-auto max-w-[300px] md:max-w-[400px] border-t-2 border-l-2 border-r-2 border-white/20 rounded-t-lg bg-black/40 backdrop-blur-sm">
				{/* Terminal header bar */}
				<div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
					<div className="flex gap-1">
						<div className="w-3 h-3 rounded-full bg-white/20" />
						<div className="w-3 h-3 rounded-full bg-white/20" />
					</div>
					<div className="text-[var(--font-size-micro)] text-[var(--color-sumi-muted)]">
						terminal
					</div>
				</div>

				{/* Terminal content */}
				<div className="px-4 py-6 text-left font-mono">
					{visibleLines.map((lineIndex) => {
						const cmd = commands[lineIndex];
						return (
							<div key={`cmd-${lineIndex}`} className="mb-3">
								<span className="text-[var(--color-sumi-muted)]">
									{cmd.text}
								</span>
								{cmd.result && (
									<span className="ml-4 text-green-400/80">{cmd.result}</span>
								)}
							</div>
						);
					})}
				</div>

				{/* ASCII logo at bottom */}
				{visibleLines.length >= commands.length - 1 && (
					<pre className="px-4 py-4 text-[var(--font-size-micro)] text-white/50 whitespace-pre">
						{asciiLogo}
					</pre>
				)}
			</div>

			{/* Code rain */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden opacity-8">
				{codeRain.map((digit, i) => (
					<div
						key={`rain-${i}`}
						className="absolute font-mono text-[var(--font-size-micro)] text-white/30 whitespace-nowrap"
						style={{
							left: `${(i * 7.5) % 100}%`,
							animationDelay: `${i * 0.3}s`,
							animation: "code-fall 20s linear infinite",
						}}
					>
						{digit}
					</div>
				))}
			</div>

			{/* Japanese wave at bottom */}
			<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
				<div className="japanese-wave">
					<div className="wave-line" />
					<div className="wave-line" />
					<div className="wave-line" />
					<div className="wave-line" />
				</div>
			</div>
		</div>
	);
}
