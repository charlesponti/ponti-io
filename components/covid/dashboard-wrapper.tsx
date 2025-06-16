import { CovidAnalyticsDashboard } from "./analytics-dashboard-server";

interface CovidDashboardWrapperProps {
	countryCode: string;
}

export default async function CovidDashboardWrapper({
	countryCode,
}: CovidDashboardWrapperProps) {
	return <CovidAnalyticsDashboard countryCode={countryCode} />;
}
