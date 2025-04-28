import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

// Service categories with their respective services
const serviceCategories = [
	{
		title: "Brand Brilliance",
		color: "from-rose-500 to-orange-400",
		icon: "✨",
		services: [
			"Eye-catching identity design",
			"Powerful brand positioning",
			"Custom design systems",
			"Attention-grabbing marketing",
			"Social media that connects",
		],
	},
	{
		title: "Product Magic",
		color: "from-emerald-500 to-teal-400",
		icon: "🔮",
		services: [
			"Vision-driven product management",
			"Stunning UI/UX design",
			"Lightning-fast web apps",
			"Mobile apps that wow",
			"Game-changing MVPs",
		],
	},
	{
		title: "Strategic Firepower",
		color: "from-violet-500 to-purple-400",
		icon: "🚀",
		services: [
			"Next-level strategy",
			"Expert consultation",
			"Elite engineering teams",
			"Visionary technical leadership",
			"Community & event mastery",
		],
	},
];

export const Services = () => {
	return (
		<motion.section
			className="relative w-full py-16 lg:py-24 overflow-hidden"
			{...fadeInUp}
		>
			{/* Background design elements */}
			<div className="absolute inset-0">
				<div className="absolute top-0 -left-24 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
			</div>

			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section header */}
				<div className="mb-16 lg:mb-24">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
						{/* Image */}
						<div className="lg:col-span-4">
							<div className="flex justify-center lg:justify-start">
								<div className="relative w-40 h-40 lg:w-48 lg:h-48">
									<Image
										src="/images/box.png"
										alt="Services"
										className="drop-shadow-2xl"
										fill
										style={{ objectFit: "contain" }}
									/>
								</div>
							</div>
						</div>

						{/* Header text */}
						<div className="lg:col-span-8 text-center lg:text-left">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-2xl mx-auto lg:mx-0">
								<span className="block text-white">Unlock Your</span>
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
									Digital Potential
								</span>
							</h2>
							<p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
								Our powerhouse services transform your vision into digital
								excellence
							</p>
						</div>
					</div>
				</div>

				{/* Services grid with modern hover interactions */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{serviceCategories.map((category, index) => (
						<ServiceCard
							key={category.title}
							category={category}
							index={index}
						/>
					))}
				</div>
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
				ease: "easeOut",
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
			<div className="h-full bg-white/5 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/8 group-hover:shadow-2xl">
				{/* Top gradient bar */}
				<div
					className={`h-1 w-16 bg-gradient-to-r ${color} rounded-full mb-8`}
				/>

				{/* Icon and title */}
				<div className="flex items-center mb-6">
					<span className="text-3xl mr-4" role="img" aria-hidden="true">
						{icon}
					</span>
					<h3 className="text-2xl font-bold text-white">{title}</h3>
				</div>

				{/* Services list with staggered animation */}
				<ul className="space-y-3">
					{services.map((service, i) => (
						<motion.li
							key={service}
							className="flex items-center text-gray-200 group-hover:text-white transition-colors duration-300"
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
					className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tl ${color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
				/>
			</div>
		</motion.div>
	);
};
