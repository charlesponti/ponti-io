import Card from "@/components/Card";
import { Grid } from "@/components/grid";
import { fetchCountryRegionalData } from "@/utils/corona.api";
import CountUpTo from "../CountUpTo";

import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import styles from "./RegionalData.module.css";

const CardContent = styled.div``;
interface RegionalDataProps {
	countryCode: string;
}

function RegionalData({ countryCode }: RegionalDataProps): JSX.Element | null {
	const {
		data: regionalData,
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["fetchCountryRegionalData", countryCode],
		queryFn: () => fetchCountryRegionalData(countryCode),
		enabled: countryCode !== undefined,
	});

	if (isLoading)
		return (
			<div
				role="progressbar"
				aria-valuenow={0}
				aria-valuemin={0}
				aria-valuemax={100}
			>
				Loading...
			</div>
		);

	return (
		<Grid className={styles.container}>
			{isError ? <div>{error.message}</div> : null}
			<Grid xs={11} className="card">
				<Card>
					<h2 style={{ paddingLeft: "16px", marginBottom: 0 }}>
						Top Affected Regions
					</h2>
					<CardContent>
						{regionalData
							? regionalData.map((row) => (
									<Grid key={row.uid} className={styles.row}>
										<Grid xs={12} md={6} className={styles.label}>
											{row.county}
											<span className={styles.state}>
												<i>{row.state}</i>
											</span>
										</Grid>
										<Grid xs={12} md={3} className={styles.stat}>
											<CountUpTo value={row.confirmed} />
											<span className={styles.statLabel}>cases</span>
										</Grid>
										<Grid xs={12} md={3} className={styles.stat}>
											<CountUpTo value={row.deaths} />
											<span className={styles.statLabel}>deaths</span>
										</Grid>
									</Grid>
								))
							: null}
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

export default RegionalData;
