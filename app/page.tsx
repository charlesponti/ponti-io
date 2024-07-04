export default function Home() {
	return (
		<div className="container flex flex-col w-full max-w-[1200px] mb-24 lg:border-x-2 px-2 md:px-8">
			<section className="flex h-[calc(100vh-95px)] mt-[95px]">
				<h2 className="flex flex-col justify-center text-balance font-serif">
					<p className="font-serif font-medium text-black text-7xl tracking-tighter italic mb-4">
						Ponti Studios
					</p>
					<p className="text-3xl text-lime-600 tracking-tighter font-light">
						We build lovable technology for humans.
					</p>
				</h2>
			</section>
		</div>
	);
}
