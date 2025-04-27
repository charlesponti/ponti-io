import { fetchCountryRegionalData } from "@/utils/corona.api";
import { useQuery } from "@tanstack/react-query";
import CountUpTo from "../../count-up/count-up-to";
import styles from "./regional-data.module.css";

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
				className="text-center"
			>
				Loading...
			</div>
		);

	return (
		<div className="grid gap-4">
			{isError ? <div>{error.message}</div> : null}
			<div className="bg-white rounded-lg shadow-md p-4">
				<h2 className="px-4 mb-0">Top Affected Regions</h2>
				<div className="p-4">
					{regionalData
						? regionalData.map((row) => (
								<div
									key={row.uid}
									className="grid grid-cols-1 md:grid-cols-12 gap-4 py-2"
								>
									<div className="md:col-span-6">
										{row.county}
										<span className={styles.state}>
											<i>{row.state}</i>
										</span>
									</div>
									<div className="md:col-span-3 text-center">
										<CountUpTo value={row.confirmed} />
										<span className={styles.statLabel}>cases</span>
									</div>
									<div className="md:col-span-3 text-center">
										<CountUpTo value={row.deaths} />
										<span className={styles.statLabel}>deaths</span>
									</div>
								</div>
							))
						: null}
				</div>
			</div>
		</div>
	);
}

export default RegionalData;
