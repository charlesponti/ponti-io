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
				{/* Subtle animated elements */}
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
					{Array.from({ length: 20 }, () => crypto.randomUUID()).map((_, i) => (
						<motion.div
							key={_}
							className="absolute w-[1px] h-[1px]"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								boxShadow: [
									"0 0 10px 2px rgba(255, 255, 255, 0.3)",
									"0 0 20px 4px rgba(255, 255, 255, 0.6)",
									"0 0 10px 2px rgba(255, 255, 255, 0.3)",
								],
							}}
							transition={{
								duration: Math.random() * 3 + 2,
								repeat: Number.POSITIVE_INFINITY,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</div>

				{/* Main content */}
				<div className="relative z-10">
					<h1 className="pb-4 tracking-tighter md:text-center">
						<span className="text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-transparent bg-clip-text transform hover:scale-[1.01] transition-transform duration-300 inline-block">
							Your Dreams.
						</span>
						<motion.span
							className="text-5xl lg:text-6xl italic block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-500 text-transparent bg-clip-text"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
						>
							Built Fast.
						</motion.span>
					</h1>
					<p className="text-lg lg:text-2xl text-gray-200 tracking-tighter font-light mb-12 ml-1 relative md:text-center">
						Build exceptional digital products without the overhead of a
						full-time team.
					</p>
					<div className="flex flex-col gap-3 items-start md:mx-auto md:items-center">
						<button
							type="button"
							className="relative border-gray-200 border-1 group inline-block px-8 py-4 rounded-xl text-xl transition-all hover:scale-105 font-semibold overflow-hidden"
							onClick={(e) => scrollToSection(e, "contact")}
						>
							<span className="absolute inset-0 opacity-70 bg-gradient-to-r from-yellow-500/30 via-pink-500/30 to-purple-600/30 rounded-xl group-hover:opacity-90 transition-all duration-300 blur-[1px]" />
							<span className="relative text-white z-10">Get started</span>
						</button>
					</div>
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
				className="max-w-7xl mx-auto px-4 py-32 text-center mt-12"
				{...fadeInUp}
			>
				<p className="text-gray-300 mb-4 text-xl tracking-wide uppercase font-semibold">
					READY TO TRANSFORM YOUR BUSINESS?
				</p>
				<h2 className="text-5xl pb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-transparent bg-clip-text font-extrabold">
					Let's Build Something Amazing Together
				</h2>
				<div className="flex flex-col items-center gap-4">
					<a
						href="mailto:hello@ponti.io"
						className="inline-block relative group px-8 py-4 rounded-xl text-xl hover:scale-105 transition-all font-semibold"
					>
						<span className="absolute inset-0 opacity-70 bg-gradient-to-r from-yellow-500/30 via-pink-500/30 to-purple-600/30 rounded-xl group-hover:opacity-90 transition-all duration-300 blur-[1px]" />
						<span className="relative z-10">Book Your Free Strategy Call</span>
					</a>
					<p className="text-gray-300">
						No commitment required • Response within 24hrs
					</p>
				</div>
			</motion.section>
		</div>
	);
}
