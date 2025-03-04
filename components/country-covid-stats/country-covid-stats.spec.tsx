import renderWithProviders from "@/tests/test.utils";
import { describe, expect, test } from "vitest";

import CountryCovidStats from ".";

describe("CountryCovidStats", () => {
	test("should render global states", async () => {
		const { container } = renderWithProviders(
			<CountryCovidStats countryCode="global" />,
		);
		expect(container).toMatchSnapshot();
	});

	test("should render US data", () => {
		const { container } = renderWithProviders(
			<CountryCovidStats countryCode="US" />,
		);
		expect(container).toMatchSnapshot();
	});
});
