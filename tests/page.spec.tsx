import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "../app/corona/page";

import renderWithProviders from "./testUtils";

describe("App", () => {
	test("renders CountryPicker after loading successfully", async () => {
		renderWithProviders(<App />);
		expect(await screen.findByText("US")).toBeInTheDocument();
	});
});
