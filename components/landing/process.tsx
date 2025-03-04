import { BentoBox } from "@/components/bento-box";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export const StudioProcess = () => {
	return (
		<motion.div className="md:col-span-4" {...fadeInUp}>
			<BentoBox title="Our proven approach" accent="gray">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
					<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
							<span className="text-lg font-semibold">1</span>
						</div>
						<h3 className="text-xl font-medium mb-4 text-gray-900">
							Discovery
						</h3>
						<p className="text-gray-600">
							We analyze your business goals, target audience, and market
							position to create a strategic roadmap.
						</p>
					</div>

					<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
							<span className="text-lg font-semibold">2</span>
						</div>
						<h3 className="text-xl font-medium mb-4 text-gray-900">Strategy</h3>
						<p className="text-gray-600">
							Develop a roadmap and technical requirements that align with your
							business objectives and target user needs.
						</p>
					</div>

					<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
							<span className="text-lg font-semibold">3</span>
						</div>
						<h3 className="text-xl font-medium mb-4 text-gray-900">
							Design & Development
						</h3>
						<p className="text-gray-600">
							Our expert team designs and builds your product using
							best-in-class technologies and agile methodologies.
						</p>
					</div>

					<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
							<span className="text-lg font-semibold">4</span>
						</div>
						<h3 className="text-xl font-medium mb-4 text-gray-900">
							Launch & Scale
						</h3>
						<p className="text-gray-600">
							We deploy your solution and provide ongoing support to ensure
							long-term success and growth.
						</p>
					</div>
				</div>
			</BentoBox>
		</motion.div>
	);
};
