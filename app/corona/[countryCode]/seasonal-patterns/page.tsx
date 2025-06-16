"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
	Bar,
	BarChart,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface SeasonalPattern {
	season: "Spring" | "Summer" | "Fall" | "Winter";
	avgCases: number;
	peakMonth: string;
	pattern: "Increasing" | "Decreasing" | "Stable";
}

interface SeasonalAnalysisResponse {
	country: string;
	metric: string;
	seasonalPatterns: SeasonalPattern[];
	monthlyAverages: Array<{
		monthName: string;
		avgCases: number;
	}>;
	dataSpan: {
		startDate: string;
		endDate: string;
		totalDataPoints: number;
	};
}

export default function SeasonalPatternsPage() {
	const params = useParams();
	const countryCode = params.countryCode as string;
	const [metric, setMetric] = useState<string>("newCasesSmoothed");

	const { data, isLoading, isError } = useQuery<SeasonalAnalysisResponse>({
		queryKey: ["seasonal-patterns", countryCode, metric],
		queryFn: () => {
			const params = new URLSearchParams();
			params.append("country", countryCode);
			params.append("metric", metric);

			return fetch(`/api/covid/analytics/seasonal-patterns?${params}`).then(
				(res) => res.json(),
			);
		},
		staleTime: 1000 * 60 * 60,
	});

	const metrics = [
		{ value: "newCasesSmoothed", label: "New Cases (7-day avg)" },
		{ value: "newDeathsSmoothed", label: "New Deaths (7-day avg)" },
	];

	const seasonColors = {
		Spring: "#10b981",
		Summer: "#f59e0b",
		Fall: "#ef4444",
		Winter: "#3b82f6",
	};

	return (
		<div className="dashboard-page">
			{/* Header */}
			<div className="dashboard-header">
				<h1 className="dashboard-title mb-4">📅 Seasonal Patterns Analysis</h1>
				<p className="dashboard-subtitle max-w-3xl mx-auto">
					Discover seasonal trends and patterns in COVID-19 data. Analyze how
					cases and deaths vary across different seasons and months.
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
					<span className="loading-text">Analyzing seasonal patterns...</span>
				</div>
			)}

			{/* Error State */}
			{isError && (
				<div className="error-card">
					<h3 className="error-title">Error Loading Data</h3>
					<p className="error-text">
						Failed to load seasonal patterns analysis. Please try again.
					</p>
				</div>
			)}

			{/* Results */}
			{data && !isLoading && !isError && (
				<div className="space-y-8">
					{/* Data Summary */}
					<div className="dashboard-card p-6">
						<h2 className="section-title mb-4">Analysis Summary</h2>
						<div className="metrics-grid-3">
							<div className="metric-card-blue metric-content">
								<div className="data-value-large metric-neutral">
									{new Date(data.dataSpan.startDate).getFullYear()} -{" "}
									{new Date(data.dataSpan.endDate).getFullYear()}
								</div>
								<div className="data-label">Years Analyzed</div>
							</div>
							<div className="metric-card-green metric-content">
								<div className="data-value-large metric-positive">
									{data.dataSpan.totalDataPoints}
								</div>
								<div className="data-label">Total Data Points</div>
							</div>
							<div className="metric-card-purple metric-content">
								<div className="data-value-large metric-neutral">
									{data.seasonalPatterns.length}
								</div>
								<div className="data-label">Seasons Analyzed</div>
							</div>
						</div>
					</div>

					{/* Seasonal Patterns */}
					{data.seasonalPatterns.length > 0 && (
						<div className="chart-container">
							<h3 className="section-subtitle mb-6">Seasonal Patterns</h3>

							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={data.seasonalPatterns}>
									<XAxis
										dataKey="season"
										tick={{ fill: "#93c5fd", fontSize: 12 }}
									/>
									<YAxis tick={{ fill: "#93c5fd", fontSize: 12 }} />
									<Tooltip
										formatter={(value: number) => [
											value.toLocaleString(),
											"Average Value",
										]}
										contentStyle={{
											backgroundColor: "rgba(0, 0, 0, 0.8)",
											border: "1px solid rgba(255, 255, 255, 0.2)",
											borderRadius: "8px",
											color: "#ffffff",
										}}
									/>
									<Bar dataKey="avgCases" fill="#3b82f6" />
								</BarChart>
							</ResponsiveContainer>

							<div className="metrics-grid-4 mt-6">
								{data.seasonalPatterns.map((season) => (
									<div
										key={season.season}
										className="dashboard-card p-4"
										style={{
											borderLeftColor: seasonColors[season.season],
											borderLeftWidth: "4px",
										}}
									>
										<h4
											className="font-bold text-lg mb-2"
											style={{ color: seasonColors[season.season] }}
										>
											{season.season}
										</h4>
										<div className="space-y-2 text-sm">
											<div className="data-row">
												<span className="data-label">Avg Cases:</span>
												<span className="data-value">
													{season.avgCases.toLocaleString()}
												</span>
											</div>
											<div className="data-row">
												<span className="data-label">Peak Month:</span>
												<span className="data-value">{season.peakMonth}</span>
											</div>
											<div className="data-row">
												<span className="data-label">Pattern:</span>
												<span
													className={`font-medium ${
														season.pattern === "Increasing"
															? "metric-negative"
															: season.pattern === "Decreasing"
																? "metric-positive"
																: "metric-neutral"
													}`}
												>
													{season.pattern}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Monthly Averages */}
					{data.monthlyAverages.length > 0 && (
						<div className="chart-container">
							<h3 className="section-subtitle mb-6">Monthly Trends</h3>
							<ResponsiveContainer width="100%" height={350}>
								<LineChart data={data.monthlyAverages}>
									<XAxis
										dataKey="monthName"
										angle={-45}
										textAnchor="end"
										height={80}
										tick={{ fill: "#93c5fd", fontSize: 12 }}
									/>
									<YAxis tick={{ fill: "#93c5fd", fontSize: 12 }} />
									<Tooltip
										formatter={(value: number) => [
											value.toLocaleString(),
											"Average Cases",
										]}
										contentStyle={{
											backgroundColor: "rgba(0, 0, 0, 0.8)",
											border: "1px solid rgba(255, 255, 255, 0.2)",
											borderRadius: "8px",
											color: "#ffffff",
										}}
									/>
									<Line
										type="monotone"
										dataKey="avgCases"
										stroke="#3b82f6"
										strokeWidth={3}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
