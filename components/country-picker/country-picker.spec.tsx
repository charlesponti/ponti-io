import renderWithProviders from "@/tests/test.utils";
import { screen, waitFor } from "@testing-library/react";
import { type Mock, beforeEach, describe, expect, test, vi } from "vitest";

// Import the server from the setup file instead of creating a new one
import CountryPicker from "./country-picker";

describe("CountryPicker", () => {
	let onCountryChange: Mock;

	// No need for server setup/teardown here since it's handled in test.setup.ts

	beforeEach(() => {
		onCountryChange = vi.fn();
	});

	test("should render country options", async () => {
		const { findByText } = renderWithProviders(
			<CountryPicker countryCode="US" onChange={onCountryChange} />,
		);

		// Wait for loading to finish and component to render
		await waitFor(() => screen.queryByTestId("country-picker"));

		// Verify countries are displayed
		expect(await findByText("United States")).toBeTruthy();
		expect(await findByText("Canada")).toBeTruthy();
		expect(await findByText("Italy")).toBeTruthy();
		expect(await findByText("China")).toBeTruthy();
	});

	test("should render global data", async () => {
		const { container } = renderWithProviders(
			<CountryPicker countryCode="global" onChange={onCountryChange} />,
		);

		await waitFor(() => screen.queryByTestId("country-picker"));
		expect(container).toMatchSnapshot();
	});

	test("should render US data", async () => {
		const { container } = renderWithProviders(
			<CountryPicker countryCode="US" onChange={onCountryChange} />,
		);

		await waitFor(() => screen.queryByTestId("country-picker"));
		expect(container).toMatchSnapshot();
	});
});
