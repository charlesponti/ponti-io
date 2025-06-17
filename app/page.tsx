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
		<div className="container px-4 mt-24 mx-auto flex flex-col gap-4 min-h-screen text-bone-100">
			{/* Hero Section */}
			<motion.section
				className="mx-auto container py-24 flex flex-col justify-left relative"
				{...fadeInUp}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1 className="pb-4 tracking-tighter md:text-center font-serif">
					<span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-bone-200 via-sage-300 to-olive-300 text-transparent bg-clip-text transform hover:scale-[1.01] transition-transform duration-300 inline-block">
						Your Dreams.
					</span>
					<motion.span
						className="text-5xl lg:text-9xl tracking-tighter block bg-gradient-to-r from-sage-200 via-olive-200 to-bone-300 text-transparent bg-clip-text font-serif"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						Built Beautifully.
					</motion.span>
				</h1>
				<p className="text-lg lg:text-2xl text-sage-300 tracking-wide font-light mb-12 ml-1 relative md:text-center font-sans">
					Exceptional products crafted by an elite team of artisans.
				</p>
				<div className="flex flex-col gap-3 items-start md:mx-auto md:items-center">
					<button
						type="button"
						className="relative border-sage-400 border-1 group inline-block px-8 py-4 rounded-xl text-xl transition-all hover:scale-105 font-medium overflow-hidden font-sans"
						onClick={(e) => scrollToSection(e, "contact")}
					>
						<span className="absolute inset-0 opacity-50 bg-gradient-to-r from-olive-200/10 via-bone-200/15 to-sage-200/10 rounded-xl group-hover:opacity-70 transition-all duration-300" />
						<span className="relative text-bone-100 z-10">
							Begin Your Journey
						</span>
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
				className="mx-auto px-4 py-12 text-center"
				{...fadeInUp}
			>
				<h2 className="text-xl md:text-5xl pb-4 bg-gradient-to-r from-bone-200 via-sage-300 to-olive-300 text-transparent bg-clip-text font-bold font-serif">
					Let's Create Something Extraordinary Together
				</h2>
				<div className="flex flex-col items-center gap-4">
					<a
						href="mailto:hello@ponti.io"
						className="text-base inline-block relative group px-8 py-4 rounded-xl md:text-xl hover:scale-105 transition-all font-medium font-sans"
					>
						<span className="absolute inset-0 opacity-50 bg-gradient-to-r from-olive-200/10 via-bone-200/15 to-sage-200/10 rounded-xl group-hover:opacity-70 transition-all duration-300" />
						<span className="relative z-10 text-bone-100">
							Book Your Private Consultation
						</span>
					</a>
					<p className="text-sage-400 font-light">
						Exclusively curated • Response within 24 hours
					</p>
				</div>
			</motion.section>
		</div>
	);
}
