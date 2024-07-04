import styled from "styled-components";

import Card from "@/components/Card";
import CountUpTo from "@/components/CountUpTo";
import { Grid } from "@/components/grid";
import { fetchCountryData, fetchData } from "@/utils/corona.api";
import { useQuery } from "@tanstack/react-query";
import styles from "./Cards.module.css";

const Title = styled.h3`
  margin-bottom: 8px;
`;

const LastUpdated = styled.div`
  margin: 1rem 0;
  text-align: center;
  width: 100%;
`;

const DateText = styled.span`
  font-style: italic;
  margin-left: 6px;
`;

type CardsProps = {
	readonly countryCode: string;
};
function Cards({ countryCode }: CardsProps): JSX.Element | null {
	const { data } = useQuery({
		queryKey: ["fetchData", countryCode],
		queryFn: () => {
			if (countryCode === "global") {
				return fetchData();
			}

			return fetchCountryData(countryCode);
		},
		enabled: countryCode !== undefined,
	});

	if (!data?.confirmed) {
		return null;
	}

	return (
		<Grid className={styles.container}>
			<Grid xs={11} className="card">
				<Card>
					<Grid
						className={`${styles["cards-container"]} justify-between`}
						data-testid="cards-container"
					>
						<Grid
							xs={12}
							sm={6}
							className={styles.stat}
							data-testid="cases-card"
						>
							<p className={styles.cardStat}>
								<CountUpTo value={data.confirmed} />
							</p>
							<Title>Cases</Title>
						</Grid>
						<Grid
							xs={12}
							sm={6}
							className={styles.stat}
							data-testid="deaths-card"
						>
							<p className={styles.cardStat}>
								<CountUpTo value={data.deaths} />
							</p>
							<Title>Deaths</Title>
						</Grid>
						<LastUpdated data-testid="cards-summary">
							as of
							<DateText>{new Date(data.lastUpdate).toDateString()}</DateText>
						</LastUpdated>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}

export default Cards;
