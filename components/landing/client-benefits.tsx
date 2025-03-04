import { BentoBox } from "@/components/bento-box";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import {
	AwardIcon,
	CircleDollarSignIcon,
	Clock10,
	LineChartIcon,
} from "lucide-react";

const ClientBenefits = () => {
	return (
		<motion.section {...fadeInUp}>
			<BentoBox accent="gray" title="Client success stories">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center mb-4">
							<LineChartIcon size={24} className="text-yellow-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Revenue Growth
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Our clients typically see 2-3x revenue growth within the first
							year after launching products we've developed.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Ponti Studios helped us increase our conversion rates by 40%
								and double our monthly revenue." — Financial Tech Startup
							</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<Clock10 size={24} className="text-blue-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Workflow Optimization
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Our custom workflow solutions have helped teams reduce manual
							processes by up to 80% and boost productivity.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"The platform Ponti built automated our most time-consuming
								tasks and cut our operational costs by 35%." — Healthcare
								Provider
							</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<CircleDollarSignIcon size={24} className="text-green-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Cost Reduction
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Our flexible engagement models help clients reduce development
							costs by up to 40% compared to traditional hiring.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Working with Ponti allowed us to scale our tech capabilities
								without the overhead of a large in-house team." — E-commerce
								Brand
							</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<AwardIcon size={24} className="text-orange-300" />
							<h3 className="text-xl font-medium text-gray-900">
								Award-Winning Design
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Our design team has helped clients win industry recognition and
							design awards for their digital products.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Our app designed by Ponti Studios won 'Best UX Design' at the
								annual industry awards and saw a 65% increase in user
								engagement." — SaaS Platform
							</p>
						</div>
					</div>
				</div>
			</BentoBox>
		</motion.section>
	);
};

export default ClientBenefits;
