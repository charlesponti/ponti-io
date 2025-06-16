import { getAvailableCountries } from "@/app/actions/covid-actions";
import Link from "next/link";
import { CoronaLayoutClient } from "./layout-client";

interface CoronaLayoutProps {
	children: React.ReactNode;
	params: {
		countryCode: string;
	};
}

export default async function CoronaLayout({
	children,
	params,
}: CoronaLayoutProps) {
	const { countryCode } = await params;

	// Fetch available countries on the server
	const availableCountries = await getAvailableCountries();

	const navigationItems = [
		{
			href: `/corona/${countryCode}`,
			icon: "📊",
			title: "Dashboard",
		},
		{
			href: `/corona/${countryCode}/pandemic-waves`,
			icon: "🌊",
			title: "Pandemic Waves",
		},
		{
			href: `/corona/${countryCode}/vaccination-effectiveness`,
			icon: "💉",
			title: "Vaccination Impact",
		},
		{
			href: `/corona/${countryCode}/seasonal-patterns`,
			icon: "📅",
			title: "Seasonal Analysis",
		},
		{
			href: `/corona/${countryCode}/outlier-detection`,
			icon: "⚡",
			title: "Outlier Detection",
		},
	];

	return (
		<div className="pt-24 max-w-7xl mx-auto px-4">
			{/* Header */}
			<div className="text-center mb-8">
				<div className="flex justify-center items-center text-3xl font-bold text-white mb-2">
					<img
						className="w-8 h-8 mr-3"
						src="/covid@0.25x.webp"
						alt="COVID 19"
						height="32"
						width="32"
					/>
					COVID-19 Analytics Dashboard
				</div>
				<p className="text-blue-200 text-lg">
					Comprehensive analysis of global COVID-19 data from Our World in Data
				</p>
			</div>

			{/* Navigation and Country Picker */}
			<div className="mb-8">
				{/* Country Picker - Client Component for interactivity */}
				<div className="mb-6 flex justify-center">
					<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-md p-4 min-w-[300px]">
						<CoronaLayoutClient countryCode={countryCode} />
					</div>
				</div>

				{/* Navigation Links - Server Component with optimized prefetching */}
				<nav
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
					aria-label="COVID-19 Dashboard Navigation"
				>
					{navigationItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 border border-white/20 group"
							prefetch={true}
						>
							<h3 className="text-white text-base font-semibold mb-1 flex items-center gap-2 group-hover:scale-105 transition-transform">
								<span className="text-2xl" role="img" aria-label={item.title}>
									{item.icon}
								</span>
								{item.title}
							</h3>
						</Link>
					))}
				</nav>
			</div>

			{/* Page Content */}
			<main className="rounded-lg min-h-[600px]">{children}</main>

			{/* Footer */}
			<footer className="text-center mt-8 py-8 border-t border-white/20">
				<p className="text-blue-200">
					Data provided by{" "}
					<a
						href="https://ourworldindata.org/coronavirus"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:underline"
					>
						Our World in Data
					</a>
					{" • "}
					Dashboard by{" "}
					<Link
						className="text-white hover:underline"
						href="https://ponti.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ponti Studios
					</Link>
				</p>
			</footer>
		</div>
	);
}
