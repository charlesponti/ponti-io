import { useQuery } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import { useCallback } from "react";
import styled from "styled-components";

import FeedbackBlock from "@/components/feedback-block";
import { BASE_URL, type CountryData } from "@/utils/corona.api";

import styles from "./country-picker.module.css";

const Label = styled.label`
  display: block;
  font-weight: 600;
  width: 100%;
`;

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
	} = useQuery<CountryData[]>({
		queryKey: ["countries"],
		queryFn: () => fetch(`${BASE_URL}/countries`).then((res) => res.json()),
	});

	const onSelectChange = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	if (isLoading) {
		return <div data-testid="loading-countries">Loading countries...</div>;
	}

	if (isError || !countries) {
		return (
			<FeedbackBlock>
				<p>Unable to load countries</p>
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
					{countries.map((country) => (
						<option key={country.name} value={country.iso3}>
							{country.name}
						</option>
					))}
				</select>
			</Label>
		</div>
	);
}

export default CountryPicker;
