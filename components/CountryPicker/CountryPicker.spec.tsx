import renderWithProviders from "@/tests/test.utils";
import { beforeEach, describe, expect, test, vi, type Mock } from "vitest";

import CountryPicker from ".";

describe("Cards", () => {
	let onCountryChange: Mock;

	beforeEach(() => {
		onCountryChange = vi.fn();
	});

	test("should render global states", async () => {
		const { container } = renderWithProviders(
			<CountryPicker countryCode="global" onChange={onCountryChange} />,
		);
		expect(container).toMatchSnapshot();
	});

	test("should render US data", () => {
		const { container } = renderWithProviders(
			<CountryPicker countryCode="US" onChange={onCountryChange} />,
		);
		expect(container).toMatchSnapshot();
	});
});
