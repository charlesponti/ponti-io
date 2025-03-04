import { BentoBox } from "@/components/bento-box";
import {
	ArrowRight,
	BabyIcon,
	LandmarkIcon,
	LineChartIcon,
} from "lucide-react";

const ArrowListItem = ({ children }: { children: React.ReactNode }) => (
	<li className="flex items-center gap-2">
		<ArrowRight size={16} /> {children}
	</li>
);
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
						Validate your concept to attract early users and investors.
					</p>
					<ul className="space-y-2 text-gray-600">
						<ArrowListItem>Rapid MVP development</ArrowListItem>
						<ArrowListItem>User testing & validation</ArrowListItem>
						<ArrowListItem>Investor pitch support</ArrowListItem>
					</ul>
				</div>

				<div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 transition hover:shadow-md">
					<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mb-4">
						<LineChartIcon size={24} />
					</div>
					<h3 className="text-xl font-medium mb-4 text-gray-900">Growth</h3>
					<p className="text-gray-600 mb-4">
						Scale and iterate quickly with flexible development resources.
					</p>
					<ul className="space-y-2 text-gray-600">
						<ArrowListItem>Feature expansion</ArrowListItem>
						<ArrowListItem>Performance optimization</ArrowListItem>
						<ArrowListItem>Analytics implementation</ArrowListItem>
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
						Future-proof your competitive advantage with advanced innovation.
					</p>
					<ul className="space-y-2 text-gray-600">
						<ArrowListItem>Enterprise integrations</ArrowListItem>
						<ArrowListItem>Advanced security measures</ArrowListItem>
						<ArrowListItem>Custom feature development</ArrowListItem>
					</ul>
				</div>
			</div>
		</BentoBox>
	);
}
