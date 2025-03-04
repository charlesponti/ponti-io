import { http, HttpResponse } from "msw";

// Consistent data for testing
const CONFIRMED_COUNT = 1000;
const RECOVERED_COUNT = 800;
const DEATHS_COUNT = 50;
const LAST_UPDATE = "2023-01-01T00:00:00.000Z";

// Base data structure for API responses
const baseResponseData = {
	confirmed: { value: CONFIRMED_COUNT },
	recovered: { value: RECOVERED_COUNT },
	deaths: { value: DEATHS_COUNT },
	lastUpdate: LAST_UPDATE,
};

// Mock regional data
const mockRegionalData = [
	{
		admin2: "County A",
		confirmed: 500,
		deaths: 20,
		lastUpdate: 1640995200000,
		provinceState: "State X",
		uid: "1",
	},
	{
		admin2: "County B",
		confirmed: 300,
		deaths: 15,
		lastUpdate: 1640995200000,
		provinceState: "State Y",
		uid: "2",
	},
];

// Available countries for selection
const countries = [
	{ name: "United States", iso2: "US", iso3: "USA" },
	{ name: "Canada", iso2: "CA", iso3: "CAN" },
	{ name: "China", iso2: "CN", iso3: "CHN" },
	{ name: "Italy", iso2: "IT", iso3: "ITA" },
	{ name: "Global", iso2: "global", iso3: "GLB" },
];

export default [
	// Base API endpoint
	http.get("https://covid19.mathdro.id/api", () => {
		return HttpResponse.json(baseResponseData);
	}),

	// Countries list endpoint
	http.get("https://covid19.mathdro.id/api/countries", () => {
		return HttpResponse.json(countries);
	}),

	// Specific country data endpoints
	http.get(
		"https://covid19.mathdro.id/api/countries/:countryCode",
		({ params }) => {
			const { countryCode } = params;
			console.log(`Mock API call for country: ${countryCode}`);
			return HttpResponse.json(baseResponseData);
		},
	),

	// Regional data endpoints
	http.get(
		"https://covid19.mathdro.id/api/countries/:countryCode/confirmed",
		({ params }) => {
			const { countryCode } = params;
			console.log(`Mock API call for regional data: ${countryCode}`);
			return HttpResponse.json(mockRegionalData);
		},
	),

	// Add more specific routes as needed
	http.get(
		"https://covid19.mathdro.id/api/countries/:countryCode/deaths",
		({ params }) => {
			const { countryCode } = params;
			return HttpResponse.json(mockRegionalData);
		},
	),
];
