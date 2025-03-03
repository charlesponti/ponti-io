import CountUpTo from "@/components/count-up/count-up-to";
import { fetchCountryData, fetchData } from "@/utils/corona.api";
import { useQuery } from "@tanstack/react-query";
import styles from "./Cards.module.css";

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
		<div className="grid">
			<div className="col-span-11">
				<div className="bg-white rounded-lg shadow-md p-6">
					<div
						className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between"
						data-testid="cards-container"
					>
						<div className="w-full text-center" data-testid="cases-card">
							<p className={styles.cardStat}>
								<CountUpTo value={data.confirmed} />
							</p>
							<h3 className="mb-2">Cases</h3>
						</div>
						<div className="w-full text-center" data-testid="deaths-card">
							<p className={styles.cardStat}>
								<CountUpTo value={data.deaths} />
							</p>
							<h3 className="mb-2">Deaths</h3>
						</div>
						<div
							className="col-span-full text-center my-4"
							data-testid="cards-summary"
						>
							as of
							<span className="italic ml-1.5">
								{new Date(data.lastUpdate).toDateString()}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
