import renderWithProviders from "@/tests/test.utils";
import { type Mock, beforeEach, describe, expect, test, vi } from "vitest";

import CountryPicker from "./country-picker";

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
