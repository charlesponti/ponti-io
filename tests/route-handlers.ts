import { http, HttpResponse } from "msw";

const COUNT = 1000;
const base = {
	data: {
		confirmed: { value: COUNT },
		deaths: { value: COUNT },
		recovered: { value: COUNT },
		lastUpdate: new Date().getTime(),
	},
};

export default [
	http.get("https://covid19.mathdro.id/api", () => {
		return HttpResponse.json(base);
	}),
	http.get("https://covid19.mathdro.id/api/countries", () => {
		return HttpResponse.json([
			{ name: "US", iso2: "US" },
			{ name: "Canada", iso2: "CA" },
			{ name: "China", iso2: "CN" },
			{ name: "Italy", iso2: "IT" },
		]);
	}),
	http.get("https://covid19.mathdro.id/api/countries/US", () => {
		return HttpResponse.json({
			confirmed: { value: COUNT },
			deaths: { value: COUNT },
			recovered: { value: COUNT },
			lastUpdate: new Date().getTime(),
		});
	}),
	http.get("https://covid19.mathdro.id/api/countries/global/confirmed", () => {
		return HttpResponse.json([
			{
				confirmed: 1000,
				deaths: 1000,
				lastUpdate: 1234,
				countryRegion: "Test Country",
				provinceState: "Test State",
				uid: "test-uid",
			},
		]);
	}),
	http.get("https://covid19.mathdro.id/api/countries/US/confirmed", () => {
		return HttpResponse.json([
			{
				confirmed: 1000,
				deaths: 1000,
				lastUpdate: 1234,
				county: "Test County",
				state: "Test State",
				uid: "test-uid",
			},
		]);
	}),
];
