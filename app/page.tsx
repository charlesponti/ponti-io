"use client";

import { StudioAbout } from "@/components/landing/about-us";
import Brands from "@/components/landing/brands";
import ClientBenefits from "@/components/landing/client-benefits";
import { StudioProcess } from "@/components/landing/process";
import { Services } from "@/components/landing/services";
import { Stages } from "@/components/landing/stages";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Home() {
	const scrollToSection = (
		e: React.MouseEvent<HTMLButtonElement>,
		id: string,
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="container px-4 mt-24 mx-auto flex flex-col gap-4 min-h-screen text-white">
			{/* Hero Section */}
			<motion.section
				className="mx-auto container py-24 flex flex-col justify-left relative"
				{...fadeInUp}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1 className="pb-4 tracking-tighter md:text-center">
					<span className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-amber-200 via-stone-300 to-amber-300 text-transparent bg-clip-text transform hover:scale-[1.01] transition-transform duration-300 inline-block">
						Your Dreams.
					</span>
					<motion.span
						className="text-5xl lg:text-9xl italic block bg-gradient-to-r from-stone-200 via-amber-200 to-stone-300 text-transparent bg-clip-text"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						Built Fast.
					</motion.span>
				</h1>
				<p className="text-lg lg:text-2xl text-gray-200 tracking-tighter font-light mb-12 ml-1 relative md:text-center">
					Get exceptional products built by an all-star team.
				</p>
				<div className="flex flex-col gap-3 items-start md:mx-auto md:items-center">
					<button
						type="button"
						className="relative border-stone-300 border-1 group inline-block px-8 py-4 rounded-xl text-xl transition-all hover:scale-105 font-semibold overflow-hidden"
						onClick={(e) => scrollToSection(e, "contact")}
					>
						<span className="absolute inset-0 opacity-60 bg-gradient-to-r from-amber-100/20 via-stone-200/20 to-amber-200/20 rounded-xl group-hover:opacity-80 transition-all duration-300 blur-[1px]" />
						<span className="relative text-stone-100 z-10">Get started</span>
					</button>
				</div>
			</motion.section>

			<Brands />

			<Services />

			<Stages />

			<StudioProcess />

			<ClientBenefits />

			<StudioAbout />

			<motion.section
				id="contact"
				className="max-w-7xl mx-auto px-4 py-12 text-center"
				{...fadeInUp}
			>
				<h2 className="text-xl md:text-5xl pb-4 bg-gradient-to-r from-amber-200 via-stone-300 to-amber-300 text-transparent bg-clip-text font-extrabold">
					Let's Build Something Amazing Together
				</h2>
				<div className="flex flex-col items-center gap-4">
					<a
						href="mailto:hello@ponti.io"
						className="text-base inline-block relative group px-8 py-4 rounded-xl md:text-xl hover:scale-105 transition-all font-semibold"
					>
						<span className="absolute inset-0 opacity-60 bg-gradient-to-r from-amber-100/20 via-stone-200/20 to-amber-200/20 rounded-xl group-hover:opacity-80 transition-all duration-300 blur-[1px]" />
						<span className="relative z-10 text-stone-100">
							Book Your Free Strategy Call
						</span>
					</a>
					<p className="text-gray-300">
						No commitment required • Response within 24hrs
					</p>
				</div>
			</motion.section>
		</div>
	);
}
