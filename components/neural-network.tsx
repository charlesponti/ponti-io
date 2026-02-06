"use client";

import React from "react";

const createNodes = (count: number) => {
	const nodes = [];
	for (let i = 0; i < count; i++) {
		nodes.push({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
		});
	}
	return nodes;
};

const createConnections = (
	nodes: Array<{ id: number; x: number; y: number }>,
) => {
	const connections: [number, number][] = [];
	const maxDistance = 25;

	for (let i = 0; i < nodes.length; i++) {
		for (let j = i + 1; j < nodes.length; j++) {
			const nodeA = nodes[i];
			const nodeB = nodes[j];
			const distance = Math.sqrt(
				(nodeA.x - nodeB.x) ** 2 + (nodeA.y - nodeB.y) ** 2,
			);

			if (distance <= maxDistance && Math.random() > 0.6) {
				connections.push([i, j]);
			}
		}
	}

	return connections;
};

export default function NeuralNetwork() {
	const nodes = React.useMemo(() => createNodes(150), []);
	const connections = React.useMemo(() => createConnections(nodes), [nodes]);

	return (
		<div className="neural-network">
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid slice"
			>
				<title>Neural Network - AI Intelligence</title>
				{connections.map(([from, to], i) => (
					<line
						key={`conn-${from}-${to}`}
						x1={nodes[from].x}
						y1={nodes[from].y}
						x2={nodes[to].x}
						y2={nodes[to].y}
						stroke="white"
						strokeWidth="0.5"
						className="neural-connection"
						style={{
							animationDelay: `${i * 0.01}s`,
						}}
					/>
				))}

				{nodes.map((node) => (
					<circle
						key={node.id}
						cx={node.x}
						cy={node.y}
						r="0.8"
						fill="none"
						stroke="white"
						strokeWidth="0.8"
						className="neural-node"
						style={{
							animationDelay: `${node.id * 0.01}s`,
						}}
					/>
				))}
			</svg>

			<style type="text/css">{`
				.neural-network {
					opacity: 0.04;
					animation: neural-pulse 2s ease-in-out infinite;
				}

				.neural-node {
					animation: neural-pulse 2s ease-in-out infinite;
				}

				.neural-connection {
					animation: neural-pulse 2s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
