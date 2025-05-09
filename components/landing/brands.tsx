import "@/styles/brands.css";
import Image from "next/image";

const Brands = () => (
	<section className="w-full py-16 px-4">
		<div className="max-w-7xl mx-auto">
			<h3 className="text-xl md:text-2xl font-medium text-center text-gray-400 mb-10">
				Trusted by innovators and industry leaders
			</h3>

			<div className="brands-container relative">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
					{[
						{
							src: "/images/companies/general-assembly.png",
							alt: "General Assembly",
						},
						{
							src: "/images/companies/reuters.png",
							alt: "Thomson Reuters",
						},
						{ src: "/images/companies/humana.png", alt: "Humana" },
						{ src: "/images/companies/kensho.png", alt: "Kensho" },
						{ src: "/images/companies/prolog.png", alt: "Prolog" },
						{ src: "/images/companies/streamyard.png", alt: "StreamYard" },
					].map(({ src, alt }) => (
						<div
							key={alt}
							className="brand-card group relative overflow-hidden rounded-2xl bg-white/15 dark:bg-white/10 border border-white/15 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/25 hover:dark:bg-white/20 p-6 flex items-center justify-center aspect-video"
						>
							<div className="relative w-full h-full flex items-center justify-center">
								<Image
									alt={alt}
									src={src}
									className="brand-image object-contain filter brightness-110 contrast-125 grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500"
									fill
									sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
									style={{ objectFit: "contain" }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default Brands;
