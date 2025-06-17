import { fadeInUp } from "@/utils/animations";
import { type Easing, motion } from "framer-motion";

// Service categories with their respective services
const serviceCategories = [
	{
		title: "Brand Refinement",
		color: "from-bone-300 to-olive-200",
		icon: "✨",
		services: [
			"Sophisticated identity design",
			"Strategic brand positioning",
			"Bespoke design systems",
			"Premium marketing experiences",
			"Curated social presence",
		],
	},
	{
		title: "Product Excellence",
		color: "from-sage-300 to-bone-200",
		icon: "🎯",
		services: [
			"Visionary product strategy",
			"Luxurious UI/UX design",
			"Performance-driven applications",
			"Elite mobile experiences",
			"Distinguished MVPs",
		],
	},
	{
		title: "Strategic Leadership",
		color: "from-olive-300 to-sage-200",
		icon: "⚡",
		services: [
			"Executive-level strategy",
			"Premium consultation services",
			"World-class engineering teams",
			"Innovative technical leadership",
			"Exclusive community experiences",
		],
	},
];

export const Services = () => {
	return (
		<motion.section
			className="relative w-full py-16 lg:py-24 overflow-hidden"
			{...fadeInUp}
		>
			{/* Section header */}
			<div className="space-y-4 mb-12 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif text-bone-100">
					Transform Vision into Excellence
				</h2>
				<p className="text-sage-300 text-lg md:text-xl max-w-2xl font-light">
					Your aspirations deserve the finest craftsmanship.
				</p>
			</div>

			{/* Services grid with modern hover interactions */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{serviceCategories.map((category, index) => (
					<ServiceCard key={category.title} category={category} index={index} />
				))}
			</div>
		</motion.section>
	);
};

interface ServiceCardProps {
	category: {
		title: string;
		color: string;
		icon: string;
		services: string[];
	};
	index: number;
}

const ServiceCard = ({ category, index }: ServiceCardProps) => {
	const { title, color, icon, services } = category;

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: "easeOut" as Easing,
			},
		}),
	};

	const serviceVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.3 + i * 0.07,
				duration: 0.4,
			},
		}),
	};

	return (
		<motion.div
			className="group relative h-full"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-10%" }}
			custom={index}
			variants={cardVariants}
		>
			{/* Card with interactive hover state */}
			<div className="h-full bg-charcoal-800/20 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md border border-sage-700/20 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-sage-600/30 group-hover:bg-charcoal-800/30 group-hover:shadow-2xl">
				{/* Top gradient bar */}
				<div
					className={`h-1 w-16 bg-gradient-to-r ${color} rounded-full mb-8`}
				/>

				{/* Icon and title */}
				<div className="flex items-center mb-6">
					<span className="text-3xl mr-4" role="img" aria-hidden="true">
						{icon}
					</span>
					<h3 className="text-2xl font-bold text-bone-100 font-serif">
						{title}
					</h3>
				</div>

				{/* Services list with staggered animation */}
				<ul className="space-y-3">
					{services.map((service, i) => (
						<motion.li
							key={service}
							className="flex items-center text-sage-300 group-hover:text-bone-200 transition-colors duration-300 font-light"
							variants={serviceVariants}
							custom={i}
						>
							<span
								className={`inline-block w-2 h-2 mr-3 rounded-full bg-gradient-to-r ${color} group-hover:scale-125 transition-transform duration-300`}
							/>
							{service}
						</motion.li>
					))}
				</ul>

				{/* Bottom decorative element */}
				<div
					className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tl ${color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500`}
				/>
			</div>
		</motion.div>
	);
};
