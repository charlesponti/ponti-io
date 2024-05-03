import Price from "@/components/landing/Price";
import Layout from "@/components/layout/Layout";

const FEATURES = {
	showPrice: false,
};

type Service = {
	name: string;
	description: string;
	price?: number;
	pricePer?: string;
	scheduleUrl?: string;
};

const SERVICES: Service[] = [
	{
		name: "Idea",
		description:
			"A two-day workshop to help you go from idea to business plan and prototype.",
		price: 4000,
		scheduleUrl: "https://cal.com/thecharlesponti/idea-sprint-meeting",
	},
	{
		name: "Design",
		description:
			"A one-week intensive sprint to get your product team on the same page and moving in the right direction.",
		price: 4000,
		scheduleUrl: "https://cal.com/thecharlesponti/design-sprint-meeting",
	},
	{
		name: "Growth",
		description:
			"A one-month two-sprint engagement to help you identify and prioritize the right growth opportunities.",
		price: 10000,
		scheduleUrl: "https://cal.com/thecharlesponti/growth-sprint-meeting",
	},
];

const ServiceCard = ({
	name,
	description,
	price,
	pricePer,
	scheduleUrl,
}: Service) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden">
			<div className="p-8">
				<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
					{name}
				</div>
				<p className="mt-2 text-gray-500">{description}</p>
				<div className="mt-6 text-xl text-gray-900 font-semibold text-right">
					{FEATURES.showPrice ? (
						<Price price={price} pricePer={pricePer} />
					) : null}
					<div className="mt-2 text-right">
						<a
							href={scheduleUrl}
							target="_blank"
							className="btn btn-primary text-white"
							rel="noreferrer"
						>
							Get started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Services() {
	return (
		<Layout>
			<div className="layout flex min-h-screen flex-col md:w-[700px]">
				<div className="bg-gray-100 mb-4 rounded-2xl">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
								Our Services
							</h2>
							<p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
								Choose your stage
							</p>
							<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
								Each is designed for particular stages of your product journey.
							</p>
							<p className="text-md text-gray-400 mt-4 md:mt-0">
								We're currently accepting new clients, but are <b>extremely</b>{" "}
								selective.
							</p>
						</div>

						<div className="mt-10">
							<div className="flex flex-col justify-center gap-4">
								{SERVICES.map((service) => (
									<ServiceCard
										key={service.name}
										name={service.name}
										description={service.description}
										price={service.price}
										pricePer={service.pricePer ? service.pricePer : ""}
										scheduleUrl={service.scheduleUrl}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
