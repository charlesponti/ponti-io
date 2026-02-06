"use client";

import React from "react";

const binaryStream = [
	"01010110",
	"11001001",
	"10100101",
	"01101010",
	"10011101",
	"00111010",
	"11100001",
	"01010011",
	"10110010",
	"01101100",
	"10001111",
	"11101010",
	"00010101",
	"11000110",
	"10111000",
	"01110101",
];

export default function BinaryStream() {
	return (
		<div className="binary-stream">
			{binaryStream.map((bits, i) => (
				<div
					key={`binary-${i}`}
					className="absolute font-mono text-[10px] text-white/10 whitespace-nowrap"
					style={{
						left: `${(i * 12) % 120}%`,
						top: `${10 + (i % 4) * 20}%`,
						animationDelay: `${i * 0.8}s`,
						animation: "stream-flow 20s linear infinite",
					}}
				>
					{bits}
				</div>
			))}
		</div>
	);
}
