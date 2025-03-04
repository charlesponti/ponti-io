import { BentoBox } from "@/components/bento-box";
import { BabyIcon, LandmarkIcon, LineChartIcon } from "lucide-react";

export function Stages() {
	return (
		<BentoBox accent="gray">
			<h2 className="text-3xl font-semibold mb-8 text-gray-900">
				Solutions for Every Growth Stage
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="p-6 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200 transition hover:shadow-md">
					<div className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-500 text-white mb-4">
						<BabyIcon size={24} />
					</div>
					<h3 className="text-xl font-medium mb-4 text-gray-900">Startup</h3>
					<p className="text-gray-600 mb-4">
						Build a strong foundational MVP to validate your concept and attract
						early users and investors.
					</p>
					<ul className="space-y-2 text-gray-600">
						<li>• Rapid MVP development</li>
						<li>• User testing & validation</li>
						<li>• Investor pitch support</li>
					</ul>
				</div>

				<div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 transition hover:shadow-md">
					<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mb-4">
						<LineChartIcon size={24} />
					</div>
					<h3 className="text-xl font-medium mb-4 text-gray-900">Growth</h3>
					<p className="text-gray-600 mb-4">
						Scale your product with flexible development resources to iterate
						quickly and find market fit.
					</p>
					<ul className="space-y-2 text-gray-600">
						<li>• Feature expansion</li>
						<li>• Performance optimization</li>
						<li>• Analytics implementation</li>
					</ul>
				</div>

				<div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 transition hover:shadow-md">
					<div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white mb-4">
						<LandmarkIcon size={24} />
					</div>
					<h3 className="text-xl font-medium mb-4 text-gray-900">
						Market Leader
					</h3>
					<p className="text-gray-600 mb-4">
						Maintain your competitive edge with advanced features and ongoing
						innovation.
					</p>
					<ul className="space-y-2 text-gray-600">
						<li>• Enterprise integrations</li>
						<li>• Advanced security measures</li>
						<li>• Custom feature development</li>
					</ul>
				</div>
			</div>
		</BentoBox>
	);
}
