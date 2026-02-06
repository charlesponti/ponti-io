"use client";

import React from "react";

interface Node {
	id: number;
	x: number;
	y: number;
}

export default function NeuralNetwork() {
	const nodes: Node[] = [
		{ id: 1, x: 10, y: 20 },
		{ id: 2, x: 25, y: 35 },
		{ id: 3, x: 45, y: 15 },
		{ id: 4, x: 60, y: 40 },
		{ id: 5, x: 80, y: 25 },
		{ id: 6, x: 95, y: 50 },
		{ id: 7, x: 20, y: 55 },
		{ id: 8, x: 40, y: 65 },
		{ id: 9, x: 65, y: 60 },
		{ id: 10, x: 85, y: 70 },
	];

	const connections = [
		[1, 2],
		[1, 3],
		[2, 3],
		[2, 4],
		[3, 5],
		[4, 6],
		[2, 7],
		[3, 7],
		[4, 5],
		[5, 6],
		[5, 9],
		[6, 8],
		[6, 9],
		[7, 9],
		[7, 10],
		[8, 9],
		[8, 10],
		[9, 10],
	];

	return (
		<div className="neural-network">
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid slice"
			>
				{/* Connections */}
				{connections.map(([from, to], i) => {
					const fromNode = nodes.find((n) => n.id === from);
					const toNode = nodes.find((n) => n.id === to);
					if (!fromNode || !toNode) return null;

					return (
						<line
							key={`conn-${i}`}
							x1={fromNode.x}
							y1={fromNode.y}
							x2={toNode.x}
							y2={toNode.y}
							stroke="white"
							strokeWidth="0.5"
							className="neural-connection"
							style={{
								animationDelay: `${i * 0.5}s`,
							}}
						/>
					);
				})}

				{/* Nodes */}
				{nodes.map((node) => (
					<circle
						key={node.id}
						cx={node.x}
						cy={node.y}
						r="1.5"
						fill="none"
						stroke="white"
						strokeWidth="0.8"
						className="neural-node"
						style={{
							animationDelay: `${node.id * 0.3}s`,
						}}
					/>
				))}
			</svg>

			<style jsx>{`
				.neural-network {
					opacity: 0.06;
					animation: neural-pulse 4s ease-in-out infinite;
				}

				.neural-node {
					animation: neural-pulse 4s ease-in-out infinite;
				}

				.neural-connection {
					animation: neural-connection 4s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
