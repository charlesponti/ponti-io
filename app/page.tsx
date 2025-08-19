"use client";

import Brands from "@/components/landing/brands";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="container mt-24 mx-auto flex flex-col gap-2 md:gap-4 text-bone-100">
			{/* Hero Section */}
			<motion.section
				className="mx-auto container py-24 flex gap-4 flex-col justify-left relative items-center"
				{...fadeInUp}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.h1
					className="text-4xl lg:text-7xl tracking-tighter block bg-gradient-to-r from-sage-200 via-olive-200 to-bone-300 text-transparent bg-clip-text font-serif"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					Build Products That Matter.
				</motion.h1>

				{/* <a
          href="mailto:hello@ponti.io"
          className="relative border-sage-400 border-1 group inline-block px-8 py-4 rounded-xl transition-all hover:scale-105 overflow-hidden"
        >
          <span className="absolute inset-0 opacity-50 bg-gradient-to-r from-olive-200/10 via-bone-200/15 to-sage-200/10 rounded-xl group-hover:opacity-70 transition-all duration-300" />
          <span className="relative text-bone-100 z-10 font-medium font-sans">
            Start Your Project
          </span>
        </a> */}
			</motion.section>

			<Brands />
		</div>
	);
}
