"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface VaccinationEffectivenessData {
	country: string;
	vaccinationStartDate: string;
	preVaccinationPeriod: {
		avgDailyCases: number;
		avgDailyDeaths: number;
		casesFatalityRate: number;
	};
	postVaccinationPeriod: {
		avgDailyCases: number;
		avgDailyDeaths: number;
		casesFatalityRate: number;
	};
	effectiveness: {
		casesReduction: number;
		deathsReduction: number;
		fatalityRateImprovement: number;
	};
	vaccinationMilestones: Array<{
		date: string;
		vaccinationRate: number;
		casesSemesterAvg: number;
		deathsSemesterAvg: number;
	}>;
}

export default function VaccinationEffectivenessPage() {
	const params = useParams();
	const countryCode = params.countryCode as string;

	const { data, isLoading, isError } = useQuery<VaccinationEffectivenessData>({
		queryKey: ["vaccination-effectiveness", countryCode],
		queryFn: () => {
			const params = new URLSearchParams();
			params.append("country", countryCode);

			return fetch(
				`/api/covid/analytics/vaccination-effectiveness?${params}`,
			).then((res) => res.json());
		},
		staleTime: 1000 * 60 * 60,
	});

	return (
		<div className="dashboard-page">
			{/* Header */}
			<div className="dashboard-header">
				<h1 className="dashboard-title mb-4">
					💉 Vaccination Effectiveness Analysis
				</h1>
				<p className="dashboard-subtitle max-w-3xl mx-auto">
					Analyze the impact of vaccination campaigns on COVID-19 cases and
					deaths. Compare pre and post-vaccination periods to measure
					effectiveness.
				</p>
			</div>

			{/* Loading State */}
			{isLoading && (
				<div className="loading-container">
					<div className="loading-spinner" />
					<span className="loading-text">
						Analyzing vaccination effectiveness...
					</span>
				</div>
			)}

			{/* Error State */}
			{isError && (
				<div className="error-card">
					<h3 className="error-title">Error Loading Data</h3>
					<p className="error-text">
						Failed to load vaccination effectiveness analysis. This country may
						not have sufficient vaccination data.
					</p>
				</div>
			)}

			{/* Results */}
			{data && !isLoading && !isError && data.effectiveness && (
				<div className="space-y-8">
					{/* Key Metrics */}
					<div className="dashboard-card p-6">
						<h2 className="section-title mb-6">Effectiveness Summary</h2>
						<div className="metrics-grid-3">
							<div className="metric-card-green metric-content">
								<div
									className={`data-value-large ${
										(data.effectiveness?.casesReduction ?? 0) > 0
											? "metric-positive"
											: "metric-negative"
									}`}
								>
									{(data.effectiveness?.casesReduction ?? 0) > 0 ? "-" : "+"}
									{Math.abs(data.effectiveness?.casesReduction ?? 0)}%
								</div>
								<div className="data-label mt-2">Cases Reduction</div>
							</div>

							<div className="metric-card-blue metric-content">
								<div
									className={`data-value-large ${
										(data.effectiveness?.deathsReduction ?? 0) > 0
											? "metric-positive"
											: "metric-negative"
									}`}
								>
									{(data.effectiveness?.deathsReduction ?? 0) > 0 ? "-" : "+"}
									{Math.abs(data.effectiveness?.deathsReduction ?? 0)}%
								</div>
								<div className="data-label mt-2">Deaths Reduction</div>
							</div>

							<div className="metric-card-purple metric-content">
								<div
									className={`data-value-large ${
										(data.effectiveness?.fatalityRateImprovement ?? 0) > 0
											? "metric-positive"
											: "metric-negative"
									}`}
								>
									{(data.effectiveness?.fatalityRateImprovement ?? 0) > 0
										? "-"
										: "+"}
									{Math.abs(data.effectiveness?.fatalityRateImprovement ?? 0)}%
								</div>
								<div className="data-label mt-2">Fatality Rate Improvement</div>
							</div>
						</div>
					</div>

					{/* Period Comparison */}
					{data.preVaccinationPeriod && data.postVaccinationPeriod && (
						<div className="dashboard-card p-6">
							<h3 className="section-subtitle mb-6">Period Comparison</h3>
							<div className="period-comparison">
								<div className="metric-card-red metric-content-left">
									<h4 className="category-header-red mb-4">
										Pre-Vaccination Period
									</h4>
									<div className="space-y-3">
										<div className="data-row">
											<span className="data-label">Avg Daily Cases:</span>
											<span className="data-value">
												{(
													data.preVaccinationPeriod?.avgDailyCases ?? 0
												).toLocaleString()}
											</span>
										</div>
										<div className="data-row">
											<span className="data-label">Avg Daily Deaths:</span>
											<span className="data-value">
												{(
													data.preVaccinationPeriod?.avgDailyDeaths ?? 0
												).toLocaleString()}
											</span>
										</div>
										<div className="data-row">
											<span className="data-label">Case Fatality Rate:</span>
											<span className="data-value">
												{(
													data.preVaccinationPeriod?.casesFatalityRate ?? 0
												).toFixed(2)}
												%
											</span>
										</div>
									</div>
								</div>

								<div className="metric-card-green metric-content-left">
									<h4 className="category-header-green mb-4">
										Post-Vaccination Period
									</h4>
									<div className="space-y-3">
										<div className="data-row">
											<span className="data-label">Avg Daily Cases:</span>
											<span className="data-value">
												{(
													data.postVaccinationPeriod?.avgDailyCases ?? 0
												).toLocaleString()}
											</span>
										</div>
										<div className="data-row">
											<span className="data-label">Avg Daily Deaths:</span>
											<span className="data-value">
												{(
													data.postVaccinationPeriod?.avgDailyDeaths ?? 0
												).toLocaleString()}
											</span>
										</div>
										<div className="data-row">
											<span className="data-label">Case Fatality Rate:</span>
											<span className="data-value">
												{(
													data.postVaccinationPeriod?.casesFatalityRate ?? 0
												).toFixed(2)}
												%
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Vaccination Milestones */}
					{data.vaccinationMilestones &&
						data.vaccinationMilestones.length > 0 && (
							<div className="chart-container">
								<h3 className="section-subtitle mb-6">
									Vaccination Milestones Impact
								</h3>
								<ResponsiveContainer width="100%" height={300}>
									<LineChart data={data.vaccinationMilestones}>
										<XAxis
											dataKey="vaccinationRate"
											tickFormatter={(value) => `${value}%`}
											tick={{ fill: "#93c5fd", fontSize: 12 }}
										/>
										<YAxis tick={{ fill: "#93c5fd", fontSize: 12 }} />
										<Tooltip
											contentStyle={{
												backgroundColor: "rgba(0, 0, 0, 0.8)",
												border: "1px solid rgba(255, 255, 255, 0.2)",
												borderRadius: "8px",
												color: "#ffffff",
											}}
										/>
										<Line
											type="monotone"
											dataKey="casesSemesterAvg"
											stroke="#3b82f6"
											strokeWidth={3}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						)}

					{/* No Data Fallback */}
					{!data.effectiveness &&
						!data.preVaccinationPeriod &&
						!data.postVaccinationPeriod && (
							<div className="warning-card">
								<h3 className="warning-title">Insufficient Data</h3>
								<p className="warning-text">
									This country doesn't have enough vaccination or COVID data to
									perform effectiveness analysis. Please try selecting a
									different country or check back later.
								</p>
							</div>
						)}
				</div>
			)}
		</div>
	);
}
