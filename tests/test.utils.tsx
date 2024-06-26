import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import type { PropsWithChildren, ReactElement } from "react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			staleTime: 0,
		},
	},
});

export const DESKTOP_RESOLUTION_WIDTH = 1280;
export const DESKTOP_RESOLUTION_HEIGHT = 800;

export const MOBILE_RESOLUTION_WIDTH = 414;
export const MOBILE_RESOLUTION_HEIGHT = 896;

export default function renderWithProviders(ui: ReactElement) {
	return render(ui, {
		wrapper: ({ children }: PropsWithChildren<unknown>): ReactElement => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		),
	});
}
