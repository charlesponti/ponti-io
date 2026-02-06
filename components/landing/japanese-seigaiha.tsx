"use client";

import React from "react";

const waveLayers = [1, 2, 3, 4, 5];

export default function JapaneseSeigaiha() {
	return (
		<div className="seigaiha-waves">
			{waveLayers.map((layer) => (
				<div
					key={layer}
					className={`wave-layer wave-layer-${layer}`}
					style={{
						animationDuration: `${20 - layer * 2}s`,
					}}
				>
					<svg
						className="wave-svg"
						viewBox="0 0 100 50"
						preserveAspectRatio="none"
					>
						<title>Seigaiha Wave</title>
						<path
							className="wave-path"
							d="M0 50 Q 25 0 50 25 50 100 25 Q 50 50 25 25 50 100 50"
							fill="none"
							stroke="white"
							strokeWidth="0.5"
						/>
					</svg>
				</div>
			))}

			<style type="text/css">{`
				.seigaiha-waves {
					position: fixed;
					inset: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					overflow: hidden;
					z-index: 20;
					mix-blend-mode: screen;
				}

				.wave-layer {
					position: absolute;
					inset: 0;
					width: 100%;
					height: 100%;
					opacity: 0.1;
				}

				.wave-layer-1 {
					opacity: 0.3;
					animation: wave-horizon 30s linear infinite;
				}

				.wave-layer-2 {
					opacity: 0.2;
					animation: wave-horizon 28s linear infinite reverse;
				}

				.wave-layer-3 {
					opacity: 0.25;
					animation: wave-horizon 26s linear infinite;
				}

				.wave-layer-4 {
					opacity: 0.2;
					animation: wave-horizon 24s linear infinite reverse;
				}

				.wave-layer-5 {
					opacity: 0.15;
					animation: wave-horizon 22s linear infinite;
				}

				.wave-svg {
					width: 200%;
					height: 100%;
					left: -50%;
				}

				.wave-path {
					animation: wave-vertical 8s ease-in-out infinite alternate;
				}

				@keyframes wave-horizon {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				@keyframes wave-vertical {
					0%, 100% {
						transform: translateY(20px);
					}
					50% {
						transform: translateY(25px);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.seigaiha-waves,
					.wave-svg,
					.wave-path {
						animation: none;
						transform: none;
					}
				}
			`}</style>
		</div>
	);
}
