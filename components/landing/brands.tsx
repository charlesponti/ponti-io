import { SectionTitle } from "@/components/section";
import Image from "next/image";

const Brands = () => (
	<section className="flex flex-col w-full mt-24">
		<SectionTitle>Who we've worked with</SectionTitle>
		<div className="flex flex-row justify-between gap-3 flex-wrap">
			<Image
				alt=""
				className="h-[125px] max-w-[150px] border-2 border-green-600 rounded-xl"
				height={150}
				width={230}
				src="/images/companies/streamyard.jpeg"
			/>
			<Image
				alt=""
				className="h-[125px] max-w-[150px] border-2 border-green-600 rounded-xl"
				height={150}
				width={200}
				src="/images/companies/kensho.jpg"
			/>
			<Image
				alt=""
				className="h-[125px] max-w-[150px] border-2 border-green-600 rounded-xl"
				height={250}
				width={250}
				src="/images/companies/humana.jpg"
			/>
			<Image
				alt=""
				className="h-[125px] max-w-[150px] border-2 border-green-600 rounded-xl"
				height={150}
				width={200}
				src="/images/companies/mimecast.jpg"
			/>
			<Image
				alt=""
				className="h-[125px] max-w-[140px] border-2 border-green-600 rounded-xl"
				height={150}
				width={200}
				src="/images/companies/thomson-reuters.jpg"
			/>
			<Image
				alt=""
				className="h-[125px] max-w-[150px] border-2 border-green-600 rounded-xl"
				height={150}
				width={200}
				src="/images/companies/your-logo.jpg"
			/>
		</div>
	</section>
);

export default Brands;
