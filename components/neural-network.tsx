"use client";

import React from "react";

const NODE_COUNT = 150;
const GRID_COLS = 8;
const GRID_ROWS = Math.ceil(NODE_COUNT / GRID_COLS);
const CELL_WIDTH = 100 / GRID_COLS;
const CELL_HEIGHT = 100 / GRID_ROWS;

const createNodes = () => {
	const nodes = [];
	for (let i = 0; i < NODE_COUNT; i++) {
		const row = Math.floor(i / GRID_COLS);
		const col = i % GRID_COLS;
		nodes.push({
			id: i,
			x: col * CELL_WIDTH + CELL_WIDTH / 2,
			y: row * CELL_HEIGHT + CELL_HEIGHT / 2,
		});
	}
	return nodes;
};

const createConnections = (
	nodes: Array<{ id: number; x: number; y: number }>,
) => {
	const connections: [number, number][] = [];
	const maxDistance = 3 * CELL_WIDTH;

	for (let i = 0; i < nodes.length; i++) {
		const rowA = Math.floor(nodes[i].y / 10);
		const colA = Math.floor(nodes[i].x / 12.5);
		const rowB = Math.floor(nodes[i].y / 10);
		const colB = Math.floor(nodes[i].x / 12.5);

		for (let j = i + 1; j < nodes.length; j++) {
			const rowDiff = Math.abs(rowA - rowB);
			const colDiff = Math.abs(colA - colB);

			if (rowDiff === 0 && colDiff === 1) {
				connections.push([i, j]);
			}
		}
	}

	return connections;
};

export default function NeuralNetwork() {
	const nodes = React.useMemo(() => createNodes(), []);
	const connections = React.useMemo(() => createConnections(nodes), [nodes]);

	return (
		<div className="neural-network">
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid slice"
			>
				{[...Array(10)].map((_, rowIndex) => (
					<line
						key={`h-line-${rowIndex}`}
						x1="0"
						y1={rowIndex * 10 + 10}
						x2="100"
						y2={rowIndex * 10 + 10}
						stroke="white"
						strokeWidth="0.3"
						className="grid-line"
						opacity="0.15"
					/>
				))}

				{[...Array(7)].map((_, colIndex) => (
					<line
						key={`v-line-${colIndex}`}
						x1={colIndex * 12.5}
						y1="0"
						x2={colIndex * 12.5}
						y2="100"
						stroke="white"
						strokeWidth="0.3"
						className="grid-line"
						opacity="0.15"
					/>
				))}

				{connections.map(([from, to]) => (
					<line
						key={`conn-${from}-${to}`}
						x1={nodes[from].x}
						y1={nodes[from].y}
						x2={nodes[to].x}
						y2={nodes[to].y}
						stroke="white"
						strokeWidth="0.4"
						className="neural-connection"
						style={{
							animationDelay: `${from * 0.008}s`,
							animation: "pulse 2s ease-in-out infinite",
						}}
					/>
				))}

				{nodes.map((node) => (
					<circle
						key={node.id}
						cx={node.x}
						cy={node.y}
						r="0.5"
						fill="none"
						stroke="white"
						strokeWidth="0.6"
						className="neural-node"
						style={{
							animationDelay: `${node.id * 0.01}s`,
							animation: "pulse 2s ease-in-out infinite",
						}}
					/>
				))}
			</svg>

			<style jsx>{`
				.neural-network {
					opacity: 0.04;
				}

				.neural-node {
					animation: pulse 2s ease-in-out infinite;
				}

				.neural-connection {
					animation: pulse 2s ease-in-out infinite;
				}

				.grid-line {
					opacity: 0.15;
				}

				@keyframes pulse {
					0%, 100% {
						opacity: 0.3;
						stroke-opacity: 0.15;
					}
					50% {
						opacity: 0.15;
						stroke-opacity: 0.4;
					}
				}
			`}</style>
		</div>
	);
}
