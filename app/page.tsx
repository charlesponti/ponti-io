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
	return (
		<div className="container px-4 mx-auto flex flex-col gap-4 min-h-screen">
			{/* Hero Section */}
			<motion.section
				className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center min-h-svh flex flex-col justify-center items-center"
				{...fadeInUp}
			>
				<p className="text-gray-500 text-xl mb-4 font-medium tracking-wide">
					TRUSTED BY INNOVATIVE TEAMS
				</p>
				<h1 className="text-5xl lg:text-6xl mb-6 tracking-tighter bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
					Turn Your Vision Into Reality, Faster
				</h1>
				<p className="text-lg lg:text-2xl text-gray-600 tracking-tighter font-light max-w-3xl mb-8">
					Build exceptional digital products
					<br />
					without the overhead of a full-time team.
				</p>
				<div className="flex flex-col gap-3 items-center">
					<a
						href="#contact"
						className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl text-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
					>
						Schedule a Call
					</a>
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
				<h2 className="text-5xl mb-8 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
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
				{/* <!-- CTA Section --> */}
				{/* <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md overflow-hidden">
					<div className="p-8 md:p-12 text-center">
						<h2 className="text-3xl font-semibold mb-4 text-gray-900">
							Ready to Turn Your Vision Into Reality?
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto mb-8">
							Let's discuss how our team of experts can help you build
							exceptional digital products without the overhead of a full-time
							team.
						</p>
						<a
							href="mailto:hello@ponti.io"
							className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition"
						>
							Schedule a Free Consultation
						</a>
					</div>
				</div> */}
			</motion.section>
		</div>
	);
}
