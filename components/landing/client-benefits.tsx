import { BentoBox } from "@/components/bento-box";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import {
	BadgeCheckIcon,
	ChartBarIcon,
	LineChartIcon,
	UsersIcon,
} from "lucide-react";

const ClientBenefits = () => {
	return (
		<motion.section {...fadeInUp}>
			<BentoBox accent="gray" title="Client success stories">
				<div className="grid grid-cols-1 gap-8">
					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center mb-4">
							<LineChartIcon size={24} className="text-yellow-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Enterprise Platform Growth
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Developed consumer Teams and enterprise Business plans with
							role-based access control and collaboration features, unlocking
							significant new revenue streams.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Ponti Studios' development work unlocked $15M+ in new ARR and
								drove 13% growth in our consumer user base through innovative
								collaboration features."
							</p>
							<p className="text-end text-sm text-gray-500 italic">
								— StreamYard
							</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<UsersIcon size={24} className="text-blue-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Creator Marketplace Platform
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Designed a two-sided platform using vector-based recommendations
							and generative AI conversation starters to connect creators with
							their audience and drive engagement.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Our platform now serves 20K+ monthly active users with a 40%
								increase in user engagement and 300% YoY growth in creator
								collaborations."
							</p>
							<p className="text-end text-sm text-gray-500 italic">— Collab</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<ChartBarIcon size={24} className="text-green-500" />
							<h3 className="text-xl font-medium text-gray-900">
								Music Industry Innovation
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Built an end-to-end platform for independent musicians to optimize
							tours and finances with intelligent route planning, financial
							dashboards, and audience insights.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Revrock significantly reduced our tour costs and provided
								invaluable financial clarity through their comprehensive
								dashboards."
							</p>
							<p className="text-end text-sm text-gray-500 italic">
								— Independent Musician
							</p>
						</div>
					</div>

					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md">
						<div className="flex items-center gap-2 mb-4">
							<BadgeCheckIcon size={24} className="text-orange-300" />
							<h3 className="text-xl font-medium text-gray-900">
								Entertainment Industry Solution
							</h3>
						</div>
						<p className="text-gray-600 mb-4">
							Led the development of an AI-powered application enabling
							Hollywood showrunners to efficiently triage writer submissions
							with automated data extraction and vector-based similarity search.
						</p>
						<div className="pt-4 border-t border-gray-200">
							<p className="text-sm text-gray-500 italic">
								"Prolog transformed our candidate evaluation process, saving
								countless hours and helping us discover talented writers we
								might have otherwise missed."
							</p>
							<p className="text-end text-sm text-gray-500 italic">
								— Hollywood Production Company
							</p>
						</div>
					</div>
				</div>
			</BentoBox>
		</motion.section>
	);
};

export default ClientBenefits;
