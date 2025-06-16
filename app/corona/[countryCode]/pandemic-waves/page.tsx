"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface WaveData {
	wave: number;
	startDate: string;
	endDate: string;
	peakDate: string;
	peakValue: number;
	totalCases: number;
	duration: number;
	avgDailyGrowth: number;
}

interface WaveAnalysisResponse {
	country: string;
	metric: string;
	waves: WaveData[];
	totalDataPoints: number;
}

export default function PandemicWavesPage() {
	const params = useParams();
	const countryCode = params.countryCode as string;
	const [metric, setMetric] = useState<string>("newCasesSmoothed");

	const { data, isLoading, isError } = useQuery<WaveAnalysisResponse>({
		queryKey: ["pandemic-waves", countryCode, metric],
		queryFn: () => {
			const params = new URLSearchParams();
			params.append("country", countryCode);
			params.append("metric", metric);

			return fetch(`/api/covid/analytics/pandemic-waves?${params}`).then(
				(res) => res.json(),
			);
		},
		staleTime: 1000 * 60 * 60, // Cache for 1 hour
	});

	const metrics = [
		{ value: "newCasesSmoothed", label: "New Cases (7-day avg)" },
		{ value: "newDeathsSmoothed", label: "New Deaths (7-day avg)" },
	];

	return (
		<div className="dashboard-page">
			{/* Header */}
			<div className="dashboard-header">
				<h1 className="dashboard-title mb-4">🌊 Pandemic Waves Analysis</h1>
				<p className="dashboard-subtitle max-w-3xl mx-auto">
					Identify and analyze waves in cases and deaths, using statistical
					methods to detect significant surges and patterns.
				</p>
			</div>

			{/* Controls */}
			<div className="dashboard-card p-6">
				<div className="max-w-md mx-auto">
					<label className="block text-sm font-medium data-label mb-2">
						Metric to Analyze
					</label>
					<select
						value={metric}
						onChange={(e) => setMetric(e.target.value)}
						className="dashboard-select w-full p-3"
					>
						{metrics.map((m) => (
							<option key={m.value} value={m.value}>
								{m.label}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Loading State */}
			{isLoading && (
				<div className="loading-container">
					<div className="loading-spinner" />
					<span className="loading-text">Analyzing pandemic waves...</span>
				</div>
			)}

			{/* Error State */}
			{isError && (
				<div className="error-card">
					<h3 className="error-title">Error Loading Data</h3>
					<p className="error-text">
						Failed to load pandemic wave analysis. Please try again.
					</p>
				</div>
			)}

			{/* Results */}
			{data && !isLoading && !isError && (
				<div className="space-y-8">
					{/* Summary */}
					<div className="dashboard-card p-6">
						<h2 className="section-title mb-4">Wave Summary</h2>
						<div className="metrics-grid-4">
							<div className="metric-card-blue metric-content">
								<div className="data-value-large metric-neutral">
									{data.waves.length}
								</div>
								<div className="data-label">Total Waves Detected</div>
							</div>
							<div className="metric-card-red metric-content">
								<div className="data-value-large metric-negative">
									{data.waves.length > 0
										? Math.max(
												...data.waves.map((w) => w.peakValue),
											).toLocaleString()
										: 0}
								</div>
								<div className="data-label">Highest Peak Value</div>
							</div>
							<div className="metric-card-green metric-content">
								<div className="data-value-large metric-positive">
									{data.waves.length > 0
										? Math.round(
												data.waves.reduce((sum, w) => sum + w.duration, 0) /
													data.waves.length,
											)
										: 0}
								</div>
								<div className="data-label">Average Wave Duration (days)</div>
							</div>
							<div className="metric-card-purple metric-content">
								<div className="data-value-large metric-neutral">
									{data.totalDataPoints}
								</div>
								<div className="data-label">Total Data Points</div>
							</div>
						</div>
					</div>

					{/* Wave Comparison Chart */}
					{data.waves.length > 0 && (
						<div className="chart-container">
							<h3 className="section-subtitle mb-4">Wave Comparison</h3>
							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={data.waves}>
									<XAxis
										dataKey="wave"
										tickFormatter={(value) => `Wave ${value}`}
										tick={{ fill: "#93c5fd", fontSize: 12 }}
									/>
									<YAxis tick={{ fill: "#93c5fd", fontSize: 12 }} />
									<Tooltip
										formatter={(value: number) => [
											value.toLocaleString(),
											"Peak Value",
										]}
										labelFormatter={(label) => `Wave ${label}`}
										contentStyle={{
											backgroundColor: "rgba(0, 0, 0, 0.8)",
											border: "1px solid rgba(255, 255, 255, 0.2)",
											borderRadius: "8px",
											color: "#ffffff",
										}}
									/>
									<Bar dataKey="peakValue" fill="#3b82f6" />
								</BarChart>
							</ResponsiveContainer>
						</div>
					)}

					{/* Detailed Wave Table */}
					{data.waves.length > 0 && (
						<div className="dashboard-card p-6">
							<h3 className="section-subtitle mb-4">Wave Details</h3>
							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-white/20">
									<thead className="bg-white/10">
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Wave
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Period
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Peak Date
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Peak Value
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Duration
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Avg Growth Rate
											</th>
										</tr>
									</thead>
									<tbody className="bg-white/5 divide-y divide-white/10">
										{data.waves.map((wave) => (
											<tr key={wave.wave} className="hover:bg-white/10">
												<td className="px-6 py-4 whitespace-nowrap">
													<span className="text-sm font-medium data-value">
														Wave {wave.wave}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm data-label">
													{new Date(wave.startDate).toLocaleDateString()} -{" "}
													{new Date(wave.endDate).toLocaleDateString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm data-label">
													{new Date(wave.peakDate).toLocaleDateString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium data-value">
													{wave.peakValue.toLocaleString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm data-label">
													{wave.duration} days
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`text-sm font-medium ${
															wave.avgDailyGrowth > 0
																? "metric-negative"
																: "metric-positive"
														}`}
													>
														{wave.avgDailyGrowth > 0 ? "+" : ""}
														{wave.avgDailyGrowth}%
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}

					{/* No Waves Found */}
					{data.waves.length === 0 && (
						<div className="warning-card">
							<h3 className="warning-title">No Significant Waves Detected</h3>
							<p className="warning-text">
								The analysis did not detect any significant pandemic waves for
								the selected country and metric. This could indicate either
								stable case patterns or insufficient data variation.
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
