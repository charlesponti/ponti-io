import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CountUpTo from "./count-up-to";

const delay = async (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

describe("CountUpTo", () => {
	test("should render render", async () => {
		render(<CountUpTo value={100} />);

		await delay(2000);

		expect(screen.getByText(100)).toBeInTheDocument();
	});
});
