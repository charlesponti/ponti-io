import { getAvailableCountries } from "@/app/actions/covid-actions";
import { CovidAnalyticsDashboard } from "@/components/covid/analytics-dashboard-server";
import { notFound } from "next/navigation";

interface CoronaDashboardPageProps {
	params: {
		countryCode: string;
	};
}

// Generate static paths for all available countries
export async function generateStaticParams() {
	try {
		const countries = await getAvailableCountries();

		// Generate paths for most common countries plus world data
		const priorityCountries = [
			"OWID_WRL",
			"USA",
			"GBR",
			"DEU",
			"FRA",
			"ITA",
			"ESP",
			"CAN",
			"AUS",
			"JPN",
		];
		const uniqueCountries = Array.from(
			new Set([...priorityCountries, ...countries]),
		);

		return uniqueCountries.slice(0, 50).map((countryCode) => ({
			countryCode,
		}));
	} catch (error) {
		console.error("Error generating static params:", error);
		return [{ countryCode: "OWID_WRL" }];
	}
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

// Generate metadata dynamically
export async function generateMetadata({ params }: CoronaDashboardPageProps) {
	const { countryCode } = await params;

	let countryName = "World";
	if (countryCode !== "OWID_WRL") {
		// You could add a country mapping here or fetch from API
		countryName = countryCode;
	}

	return {
		title: `COVID-19 Dashboard - ${countryName} | Ponti Studios`,
		description: `Comprehensive COVID-19 analytics and statistics for ${countryName}. View cases, deaths, vaccinations, and trends over time.`,
		keywords: [
			"covid-19",
			"coronavirus",
			"dashboard",
			"statistics",
			countryName,
			"analytics",
		],
		openGraph: {
			title: `COVID-19 Dashboard - ${countryName}`,
			description: `Comprehensive COVID-19 analytics for ${countryName}`,
			type: "website",
		},
	};
}

// Loading component for Suspense
function DashboardSkeleton() {
	return (
		<div className="p-8 space-y-6">
			<div className="animate-pulse">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
				</div>
				<div className="bg-white/10 rounded-lg p-6 h-96 mb-6" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white/10 rounded-lg p-6 h-80" />
					<div className="bg-white/10 rounded-lg p-6 h-80" />
				</div>
			</div>
		</div>
	);
}

export default async function CoronaDashboardPage({
	params,
}: CoronaDashboardPageProps) {
	const { countryCode } = await params;

	// Validate country code exists
	try {
		const availableCountries = await getAvailableCountries();
		if (
			!availableCountries.includes(countryCode) &&
			countryCode !== "OWID_WRL"
		) {
			notFound();
		}
	} catch (error) {
		console.error("Error validating country code:", error);
	}

	// Directly render the server component
	const dashboardContent = await CovidAnalyticsDashboard({ countryCode });

	return <div className="p-8">{dashboardContent}</div>;
}
