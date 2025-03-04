import "@/styles/brands.css";
import Image from "next/image";

const Brands = () => (
	<section className="overflow-hidden my-12">
		<h3 className="mb-4 text-center text-gray-400">
			Trusted by innovators and industry leaders
		</h3>
		<div className="flex flex-row gap-8 animate-marquee items-center">
			<Image
				alt=""
				className="rounded-2xl border-dashed grayscale hover:grayscale-0 transition-all border-2 border-gray-100 h-[150px] max-h-[100px] w-auto px-4"
				height={100}
				width={230}
				src="/images/companies/streamyard.jpeg"
			/>
			<Image
				alt=""
				className="rounded-2xl border-dashed grayscale hover:grayscale-0 transition-all border-2 border-gray-100 h-[150px] max-h-[100px] w-auto px-4"
				height={100}
				width={200}
				src="/images/companies/kensho.jpg"
			/>
			<Image
				alt=""
				className="rounded-2xl border-dashed grayscale hover:grayscale-0 transition-all border-2 border-gray-100 h-[150px] max-h-[100px] w-auto px-4"
				height={100}
				width={250}
				src="/images/companies/humana.jpg"
			/>
			<Image
				alt=""
				className="rounded-2xl border-dashed grayscale hover:grayscale-0 transition-all border-2 border-gray-100 h-[150px] max-h-[100px] w-auto px-4"
				height={100}
				width={200}
				src="/images/companies/mimecast.jpg"
			/>
			<Image
				alt=""
				className="rounded-2xl border-dashed grayscale hover:grayscale-0 transition-all border-2 border-gray-100 h-[150px] max-h-[100px] w-auto px-4"
				height={100}
				width={200}
				src="/images/companies/thomson-reuters.jpg"
			/>
		</div>
	</section>
);

export default Brands;
