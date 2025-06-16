"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

interface OutlierData {
	date: string;
	value: number;
	outlierType: "spike" | "drop" | "anomaly";
	severity: "mild" | "moderate" | "severe";
	percentageChange: number;
}

interface OutlierAnalysisResponse {
	country: string;
	metric: string;
	threshold: number;
	outliers: OutlierData[];
	summary: {
		totalOutliers: number;
		severeOutliers: number;
		spikes: number;
		drops: number;
	};
}

export default function OutlierDetectionPage() {
	const params = useParams();
	const countryCode = params.countryCode as string;
	const [metric, setMetric] = useState<string>("newCasesSmoothed");
	const [threshold, setThreshold] = useState<number>(2.5);

	const { data, isLoading, isError } = useQuery<OutlierAnalysisResponse>({
		queryKey: ["outlier-detection", countryCode, metric, threshold],
		queryFn: () => {
			const params = new URLSearchParams();
			params.append("country", countryCode);
			params.append("metric", metric);
			params.append("threshold", threshold.toString());

			return fetch(`/api/covid/analytics/outlier-detection?${params}`).then(
				(res) => res.json(),
			);
		},
		staleTime: 1000 * 60 * 60,
	});

	const metrics = [
		{ value: "newCasesSmoothed", label: "New Cases (7-day avg)" },
		{ value: "newDeathsSmoothed", label: "New Deaths (7-day avg)" },
		{ value: "totalCases", label: "Total Cases" },
		{ value: "totalDeaths", label: "Total Deaths" },
	];

	const getTypeIcon = (type: string) => {
		switch (type) {
			case "spike":
				return "📈";
			case "drop":
				return "📉";
			case "anomaly":
				return "⚠️";
			default:
				return "❓";
		}
	};

	return (
		<div className="dashboard-page">
			{/* Header */}
			<div className="dashboard-header">
				<h1 className="dashboard-title mb-4">⚡ Outlier Detection Analysis</h1>
				<p className="dashboard-subtitle max-w-3xl mx-auto">
					Identify unusual spikes, drops, and anomalies in COVID-19 data using
					statistical analysis. Detect data points that deviate significantly
					from normal patterns.
				</p>
			</div>

			{/* Controls */}
			<div className="dashboard-card p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium data-label mb-2">
							Metric
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
					<div>
						<label className="block text-sm font-medium data-label mb-2">
							Sensitivity (Z-score threshold)
						</label>
						<select
							value={threshold}
							onChange={(e) => setThreshold(Number(e.target.value))}
							className="dashboard-select w-full p-3"
						>
							<option value={2}>High Sensitivity (2.0)</option>
							<option value={2.5}>Normal Sensitivity (2.5)</option>
							<option value={3}>Low Sensitivity (3.0)</option>
							<option value={3.5}>Very Low Sensitivity (3.5)</option>
						</select>
					</div>
				</div>
			</div>

			{/* Loading State */}
			{isLoading && (
				<div className="loading-container">
					<div className="loading-spinner" />
					<span className="loading-text">Detecting outliers...</span>
				</div>
			)}

			{/* Error State */}
			{isError && (
				<div className="error-card">
					<h3 className="error-title">Error Loading Data</h3>
					<p className="error-text">
						Failed to load outlier detection analysis. Please try again.
					</p>
				</div>
			)}

			{/* Results */}
			{data && !isLoading && !isError && (
				<div className="space-y-8">
					{/* Summary */}
					<div className="dashboard-card p-6">
						<h2 className="section-title mb-4">Detection Summary</h2>
						<div className="metrics-grid-4">
							<div className="metric-card-blue metric-content">
								<div className="data-value-large metric-neutral">
									{data.summary.totalOutliers}
								</div>
								<div className="data-label">Total Outliers</div>
							</div>
							<div className="metric-card-red metric-content">
								<div className="data-value-large metric-negative">
									{data.summary.severeOutliers}
								</div>
								<div className="data-label">Severe Outliers</div>
							</div>
							<div className="metric-card-green metric-content">
								<div className="data-value-large metric-positive">
									{data.summary.spikes}
								</div>
								<div className="data-label">Spikes Detected</div>
							</div>
							<div className="metric-card-purple metric-content">
								<div className="data-value-large metric-neutral">
									{data.summary.drops}
								</div>
								<div className="data-label">Drops Detected</div>
							</div>
						</div>
					</div>

					{/* Outliers Timeline */}
					{data.outliers.length > 0 && (
						<div className="dashboard-card p-6">
							<h3 className="section-subtitle mb-6">Recent Outliers</h3>
							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-white/20">
									<thead className="bg-white/10">
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Date
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Value
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Type
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												Severity
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium data-label uppercase tracking-wider">
												% Change
											</th>
										</tr>
									</thead>
									<tbody className="bg-white/5 divide-y divide-white/10">
										{data.outliers
											.sort(
												(a, b) =>
													new Date(b.date).getTime() -
													new Date(a.date).getTime(),
											)
											.slice(0, 10)
											.map((outlier) => (
												<tr
													key={`${outlier.date}-${outlier.value}`}
													className="hover:bg-white/10"
												>
													<td className="px-6 py-4 whitespace-nowrap text-sm data-value">
														{new Date(outlier.date).toLocaleDateString()}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium data-value">
														{outlier.value.toLocaleString()}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm data-label">
														<span className="flex items-center">
															{getTypeIcon(outlier.outlierType)}
															<span className="ml-1 capitalize">
																{outlier.outlierType}
															</span>
														</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<span
															className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
																outlier.severity === "severe"
																	? "bg-red-500/20 text-red-300 border border-red-400/30"
																	: outlier.severity === "moderate"
																		? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
																		: "bg-green-500/20 text-green-300 border border-green-400/30"
															}`}
														>
															{outlier.severity}
														</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm">
														<span
															className={`font-medium ${
																outlier.percentageChange > 0
																	? "metric-negative"
																	: "metric-positive"
															}`}
														>
															{outlier.percentageChange > 0 ? "+" : ""}
															{outlier.percentageChange}%
														</span>
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						</div>
					)}

					{/* No Outliers Found */}
					{data.outliers.length === 0 && (
						<div className="success-card">
							<h3 className="success-title">
								No Significant Outliers Detected
							</h3>
							<p className="success-text">
								No outliers were found with the current sensitivity settings.
								Try reducing the sensitivity threshold to detect more subtle
								outliers.
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
