import "@/styles/brands.css";
import Image from "next/image";

const Brands = () => (
	<section className="flex flex-col items-center overflow-hidden my-12">
		<h3 className="mb-4 text-center text-gray-400">
			Trusted by innovators and industry leaders
		</h3>
		<div className="grid grid-cols-3 gap-8">
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all"
					height={150}
					width={125}
					src="/images/companies/prolog.png"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all px-4"
					height={100}
					width={300}
					src="/images/companies/streamyard.jpeg"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all px-4"
					height={100}
					width={170}
					src="/images/companies/kensho.jpg"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all px-4"
					height={100}
					width={150}
					src="/images/companies/humana.jpg"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all px-4"
					height={100}
					width={200}
					src="/images/companies/mimecast.jpg"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					alt=""
					className="rounded-2xl grayscale hover:grayscale-0 transition-all px-4"
					height={100}
					width={200}
					src="/images/companies/thomson-reuters.jpg"
				/>
			</div>
		</div>
	</section>
);

export default Brands;
