import { BentoBox } from "@/components/bento-box";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export const Services = () => (
	<motion.div className="md:col-span-2 row-span-2 space-y-4" {...fadeInUp}>
		<BentoBox
			accent="gray"
			className="flex gap-6 flex-col items-center w-full rounded px-4 max-w-full"
		>
			<div className="flex justify-center w-full">
				<Image
					src="/images/box.png"
					alt="Services"
					className="max-w-[200px] w-full"
					width={200}
					height={200}
					layout="responsive"
				/>
			</div>
			<div className="flex justify-center items-center flex-wrap gap-2 max-w-[80%]">
				<ServiceChip>Product Management</ServiceChip>
				<ServiceChip>Strategy</ServiceChip>
				<ServiceChip>UI/UX design</ServiceChip>
				<ServiceChip>Web apps</ServiceChip>
				<ServiceChip>Branding</ServiceChip>
				<ServiceChip>Marketing</ServiceChip>
				<ServiceChip>Mobile apps</ServiceChip>
				<ServiceChip>Social Media</ServiceChip>
				<ServiceChip>Community</ServiceChip>
				<ServiceChip>Events</ServiceChip>
				<ServiceChip>Experiences</ServiceChip>
			</div>
			<h3 className="text-md text-black-500">
				Everything you need. In one place.
			</h3>
		</BentoBox>
		<Solutions />
	</motion.div>
);

const ServiceChip = ({ children }: React.PropsWithChildren) => (
	<p className="flex items-center px-4 py-2 border-2 rounded-3xl text-md font-medium bg-opacity-20 border-dashed border-gray-300">
		{children}
	</p>
);

const Solutions = () => {
	return (
		<BentoBox title="Our services" accent="gray">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="p-6 rounded-xl bg-blue-50 border border-blue-100 transition hover:shadow-md">
					<h3 className="text-xl font-medium mb-4 text-gray-900">
						Brand & Identity
					</h3>
					<ul className="space-y-2 text-gray-600">
						<li>• Logo & visual identity design</li>
						<li>• Brand strategy & positioning</li>
						<li>• Style guides & design systems</li>
					</ul>
				</div>

				<div className="p-6 rounded-xl bg-green-50 border border-green-100 transition hover:shadow-md">
					<h3 className="text-xl font-medium mb-4 text-gray-900">
						Product Development
					</h3>
					<ul className="space-y-2 text-gray-600">
						<li>• MVP development & validation</li>
						<li>• Full-stack web applications</li>
						<li>• Mobile apps (iOS & Android)</li>
					</ul>
				</div>

				<div className="p-6 rounded-xl bg-purple-50 border border-purple-100 transition hover:shadow-md">
					<h3 className="text-xl font-medium mb-4 text-gray-900">
						Dedicated Teams
					</h3>
					<ul className="space-y-2 text-gray-600">
						<li>• Engineering team augmentation</li>
						<li>• Product design squads</li>
						<li>• Technical leadership</li>
					</ul>
				</div>
			</div>
		</BentoBox>
	);
};
