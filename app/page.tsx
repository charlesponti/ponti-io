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
		<div className="container max-w-[700px] px-4 mt-24 mx-auto flex flex-col gap-4">
			{/* Hero Section */}
			<motion.section
				className="max-w-7xl mx-auto pt-44 pb-32 text-center flex flex-col justify-center items-center"
				{...fadeInUp}
			>
				<h1 className="text-5xl lg:text-6xl pb-4 tracking-tighter bg-gradient-to-r from-pink-900 to-purple-700 text-transparent bg-clip-text">
					From Vision to Reality. <span className="italic">Fast.</span>
				</h1>
				<p className="text-lg lg:text-2xl text-gray-600 tracking-tighter font-light max-w-3xl mb-8">
					Build exceptional digital products
					<br />
					without the overhead of a full-time team.
				</p>
				<div className="flex flex-col gap-3 items-center">
					<button
						type="button"
						className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl text-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
						onClick={(e) => scrollToSection(e, "contact")}
					>
						Get started
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
				className="max-w-7xl mx-auto px-4 py-32 text-center"
				{...fadeInUp}
			>
				<p className="text-gray-500 mb-4 text-xl">
					READY TO TRANSFORM YOUR BUSINESS?
				</p>
				<h2 className="text-5xl pb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
					Let's Build Something Amazing Together
				</h2>
				<div className="flex flex-col items-center gap-4">
					<a
						href="mailto:hello@ponti.io"
						className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl text-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
					>
						Book Your Free Strategy Call
					</a>
					<p className="text-gray-600">
						No commitment required • Response within 24hrs
					</p>
				</div>
			</motion.section>
		</div>
	);
}
