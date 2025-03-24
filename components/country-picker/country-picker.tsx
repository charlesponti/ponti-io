import { useQuery } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import { useCallback } from "react";
import styled from "styled-components";

import FeedbackBlock from "@/components/feedback-block";

import styles from "./country-picker.module.css";

const Label = styled.label`
  display: block;
  font-weight: 600;
  width: 100%;
`;

type Country = {
	name: string;
	code: string;
};

type CountryPickerProps = {
	readonly onChange: (val: string) => void;
	readonly countryCode: string;
};
function CountryPicker({
	onChange,
	countryCode,
}: CountryPickerProps): JSX.Element {
	const {
		data: countries,
		isLoading,
		isError,
		error,
	} = useQuery<Country[]>({
		queryKey: ["countries"],
		queryFn: () => fetch("/api/countries").then((res) => res.json()),
	});

	const onSelectChange = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	console.log({ isLoading, isError, error, countries });
	if (isLoading) {
		return <div data-testid="loading-countries">Loading countries...</div>;
	}

	if (isError) {
		return (
			<FeedbackBlock>
				<p>Unable to load countries {error.message}</p>
			</FeedbackBlock>
		);
	}

	return (
		<div className={styles.container}>
			<Label htmlFor="country" data-testid="country-picker">
				Country
				<select
					id="country"
					className={styles.select}
					onChange={onSelectChange}
					value={countryCode}
				>
					<option value="global">All</option>
					{countries?.map((country) => (
						<option key={country.name} value={country.code}>
							{country.name}
						</option>
					))}
				</select>
			</Label>
		</div>
	);
}

export default CountryPicker;
