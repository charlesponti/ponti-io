import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";

import renderWithProviders from "@/tests/test.utils";
import RegionalData from ".";

describe("RegionalData", () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	test("should render progressbar", async () => {
		renderWithProviders(<RegionalData countryCode="global" />);
		const progressbar = await screen.findByRole("progressbar");
		expect(progressbar).toBeDefined();
	});
});
