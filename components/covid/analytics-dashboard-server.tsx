import {
	getCovidStats,
	getCovidTimeSeries,
	getGlobalComparisonData,
} from "@/app/actions/covid-actions";
import { PerformanceMonitor } from "@/components/performance-monitor";
import { StatsOverview } from "./charts/stats-overview";
import { TimeSeriesChart } from "./charts/time-series-chart";
import { TopCountriesChart } from "./charts/top-countries-chart";
import { VaccinationProgress } from "./charts/vaccination-progress";

interface CovidAnalyticsDashboardProps {
	countryCode: string;
}

// Loading components for different sections
function StatsLoading() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
				<div className="h-8 bg-gray-200 rounded w-1/2" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
				<div className="h-8 bg-gray-200 rounded w-1/2" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
				<div className="h-8 bg-gray-200 rounded w-1/2" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
				<div className="h-8 bg-gray-200 rounded w-1/2" />
			</div>
		</div>
	);
}

function ChartsLoading() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
				<div className="h-64 bg-gray-200 rounded" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
				<div className="h-64 bg-gray-200 rounded" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
				<div className="h-64 bg-gray-200 rounded" />
			</div>
			<div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
				<div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
				<div className="h-64 bg-gray-200 rounded" />
			</div>
		</div>
	);
}

// Main Server Component that handles all data fetching
export async function CovidAnalyticsDashboard({
	countryCode,
}: CovidAnalyticsDashboardProps) {
	return (
		<PerformanceMonitor label={`COVID Dashboard - ${countryCode}`}>
			{await renderDashboard(countryCode)}
		</PerformanceMonitor>
	);
}

// Separate function for the actual dashboard rendering
async function renderDashboard(countryCode: string) {
	try {
		// Fetch all data in parallel for better performance
		const [statsResponse, timeSeriesResponse, globalComparisonResponse] =
			await Promise.all([
				getCovidStats(countryCode),
				getCovidTimeSeries(countryCode, 500), // Reduced limit to manage size
				countryCode !== "OWID_WRL"
					? getGlobalComparisonData(30)
					: Promise.resolve({ data: [] }),
			]);

		const statsData = statsResponse.data?.[0] || null;
		const timeSeriesData = timeSeriesResponse.data || [];
		const globalComparisonData = globalComparisonResponse.data || [];

		if (!timeSeriesData || timeSeriesData.length === 0) {
			return (
				<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
					<h3 className="text-yellow-800 font-semibold">No Data Available</h3>
					<p className="text-yellow-600 mt-2">
						No COVID data is currently available for the selected country.
					</p>
				</div>
			);
		}

		return (
			<div className="space-y-8 max-w-7xl mx-auto px-4">
				{/* Stats Overview */}
				<StatsOverview
					data={statsData ? [statsData] : []}
					countryCode={countryCode}
				/>

				{/* Charts Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Cases Timeline */}
					<TimeSeriesChart
						data={timeSeriesData}
						metric="totalCases"
						title="Total Cases Over Time"
						color="#3b82f6"
					/>

					{/* Deaths Timeline */}
					<TimeSeriesChart
						data={timeSeriesData}
						metric="totalDeaths"
						title="Total Deaths Over Time"
						color="#ef4444"
					/>

					{/* New Cases Timeline - Use smoothed data */}
					<TimeSeriesChart
						data={timeSeriesData}
						metric="newCasesSmoothed"
						title="New Cases (7-day average)"
						color="#f59e0b"
					/>

					{/* Vaccination Progress */}
					<VaccinationProgress
						data={timeSeriesData}
						title="Vaccination Progress (%)"
					/>
				</div>

				{/* Global Comparisons - Only show for specific countries */}
				{countryCode !== "OWID_WRL" && (
					<div className="space-y-6">
						<h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
							Global Comparisons
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<TopCountriesChart
								data={globalComparisonData}
								metric="totalCasesPerMillion"
								title="Top Countries by Cases per Million"
								color="#3b82f6"
								limit={15}
							/>

							<TopCountriesChart
								data={globalComparisonData}
								metric="totalDeathsPerMillion"
								title="Top Countries by Deaths per Million"
								color="#ef4444"
								limit={15}
							/>

							<TopCountriesChart
								data={globalComparisonData}
								metric="peopleFullyVaccinatedPerHundred"
								title="Top Countries by Vaccination Rate"
								color="#10b981"
								limit={15}
							/>

							<TopCountriesChart
								data={globalComparisonData}
								metric="stringencyIndex"
								title="Current Government Response Stringency"
								color="#8b5cf6"
								limit={15}
							/>
						</div>
					</div>
				)}

				{/* Additional Metrics */}
				<div className="space-y-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{/* New Deaths Timeline - Use smoothed data */}
						<TimeSeriesChart
							data={timeSeriesData}
							metric="newDeathsSmoothed"
							title="New Deaths (7-day average)"
							color="#dc2626"
						/>

						{/* Reproduction Rate - Available for most countries */}
						<TimeSeriesChart
							data={timeSeriesData}
							metric="reproductionRate"
							title="Reproduction Rate (R)"
							color="#8b5cf6"
						/>

						{/* Conditionally show based on data availability */}
						{timeSeriesData.some(
							(record) => record.newVaccinationsSmoothed !== null,
						) ? (
							<TimeSeriesChart
								data={timeSeriesData}
								metric="newVaccinationsSmoothed"
								title="New Vaccinations (7-day average)"
								color="#059669"
							/>
						) : (
							<TimeSeriesChart
								data={timeSeriesData}
								metric="totalDeathsPerMillion"
								title="Total Deaths per Million"
								color="#f59e0b"
							/>
						)}

						{/* Show test positivity if available, otherwise show ICU patients */}
						{timeSeriesData.some((record) => record.positiveRate !== null) ? (
							<TimeSeriesChart
								data={timeSeriesData}
								metric="positiveRate"
								title="Test Positivity Rate"
								color="#f59e0b"
							/>
						) : timeSeriesData.some(
								(record) => record.icuPatientsPerMillion !== null,
							) ? (
							<TimeSeriesChart
								data={timeSeriesData}
								metric="icuPatientsPerMillion"
								title="ICU Patients per Million"
								color="#ef4444"
							/>
						) : (
							<TimeSeriesChart
								data={timeSeriesData}
								metric="totalCasesPerMillion"
								title="Total Cases per Million"
								color="#3b82f6"
							/>
						)}
					</div>
				</div>
			</div>
		);
	} catch (error) {
		console.error("Error loading COVID dashboard:", error);
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-6">
				<h3 className="text-red-800 font-semibold">Error Loading Dashboard</h3>
				<p className="text-red-600 mt-2">
					Failed to load COVID dashboard data. Please try again later.
				</p>
			</div>
		);
	}
}
