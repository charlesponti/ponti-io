"use client";

import { useCallback, useState } from "react";

import Cards from "@/components/Cards";
import FeedbackBlock from "@/components/FeedbackBlock";
import RegionalData from "@/components/RegionalData";
import { CountryPicker } from "@/components/country-picker";
import { BASE_URL } from "@/utils/corona.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

function App() {
	const [countryCode, setCountryCode] = useState<string>("global");
	const onCountryChange = useCallback((code: string): void => {
		setCountryCode(code);
	}, []);
	const { isLoading, isError } = useQuery({
		queryKey: ["base"],
		queryFn: async () => fetch(BASE_URL),
		retry: false,
	});

	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex items-center w-full text-2xl p-4 mb-8 opacity-80">
				<Image
					className="w-6 h-6 max-h-6 mr-2"
					src="/covid@0.25x.webp"
					alt="COVID 19"
					data-testid="covid-image"
					height="24"
					width="24"
				/>
				COVID-19 Data Tracker
			</div>
			{isError ? (
				<FeedbackBlock>
					The API is currently down. Please try again later.
				</FeedbackBlock>
			) : null}
			{isLoading && !isError ? <div>Loading...</div> : null}
			{!isLoading && !isError ? (
				<>
					<CountryPicker onChange={onCountryChange} countryCode={countryCode} />
					<Cards countryCode={countryCode} />
					{countryCode !== "global" && (
						<RegionalData countryCode={countryCode} />
					)}
				</>
			) : null}
			<div className="fixed bottom-0 flex justify-center w-full text-md mt-8 mb-8">
				Produced by
				<Link
					className="text-md font-medium letter-spacing-1 ml-5 underline-offset-4"
					rel="noopener noreferrer"
					target="_blank"
					href="https://ponti.io"
				>
					Ponti Studios
				</Link>
			</div>
		</div>
	);
}

export default App;
