import { BentoBox } from "@/components/bento-box";
import { ArrowListItem } from "@/components/landing/arrow-list-item";
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
	<p className="flex items-center px-4 py-2 border-2 5ounded-3xl text-md font-medium border-dashed border-gray-500">
		{children}
	</p>
);

const Solutions = () => {
	return (
		<BentoBox title="Our services" accent="gray">
			<div className="grid grid-cols-1 gap-2">
				<div className="p-6 rounded-xl border border-gray-200 transition hover:shadow-md">
					<h3 className="text-xl font-bold mb-4">Brand & Identity</h3>
					<ul className="space-y-2">
						<ArrowListItem>Logo & visual identity design</ArrowListItem>
						<ArrowListItem>Brand strategy & positioning</ArrowListItem>
						<ArrowListItem>Style guides & design systems</ArrowListItem>
					</ul>
				</div>

				<div className="p-6 rounded-xl border border-green-500 transition hover:shadow-md">
					<h3 className="text-xl font-medium mb-4">Product Development</h3>
					<ul className="space-y-2">
						<ArrowListItem>MVP development & validation</ArrowListItem>
						<ArrowListItem>Full-stack web applications</ArrowListItem>
						<ArrowListItem>Mobile apps (iOS & Android)</ArrowListItem>
					</ul>
				</div>

				<div className="p-6 rounded-xl border border-purple-500 transition hover:shadow-md">
					<h3 className="text-xl font-medium mb-4">Dedicated Teams</h3>
					<ul className="space-y-2">
						<ArrowListItem>Engineering team augmentation</ArrowListItem>
						<ArrowListItem>Product design squads</ArrowListItem>
						<ArrowListItem>Technical leadership</ArrowListItem>
					</ul>
				</div>
			</div>
		</BentoBox>
	);
};
