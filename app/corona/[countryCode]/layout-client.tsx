"use client";

import { CountryPicker } from "@/components/country-picker";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

interface CoronaLayoutClientProps {
	countryCode: string;
}

export function CoronaLayoutClient({ countryCode }: CoronaLayoutClientProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [optimisticCountry, setOptimisticCountry] = useState(countryCode);

	const onCountryChange = useCallback(
		(newCountryCode: string) => {
			// Immediate visual feedback
			setOptimisticCountry(newCountryCode);

			startTransition(() => {
				// Get the current path after the country code
				const pathname = window.location.pathname;
				const pathParts = pathname.split("/");
				const afterCountryPath = pathParts.slice(3).join("/"); // Skip '', 'corona', countryCode

				// Build new URL with the new country code
				const newPath = afterCountryPath
					? `/corona/${newCountryCode}/${afterCountryPath}`
					: `/corona/${newCountryCode}`;

				router.push(newPath);
			});
		},
		[router],
	);

	return (
		<div className="relative">
			{isPending && (
				<div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
					<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
				</div>
			)}
			<CountryPicker
				countryCode={optimisticCountry}
				onChange={onCountryChange}
			/>
		</div>
	);
}
