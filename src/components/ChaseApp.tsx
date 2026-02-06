import { useEffect, useState } from "react";
import "../styles/chase.css";

function getCurrentTime() {
	const now = new Date();
	return now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
}

export function ChaseApp() {
	const [currentTime, setCurrentTime] = useState(getCurrentTime());

	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="mt-24 flex items-center justify-center w-full">
			<div className="iphone-frame mx-auto w-[calc(100vw-2rem)] max-w-[375px]">
				<div className="iphone-notch" />
				<div className="iphone-screen">
					<div className="flex justify-between px-5 py-2 text-sm font-medium">
						<div>{currentTime}</div>
						<div className="flex items-center space-x-2">
							<span>•••</span>
							<span>📶</span>
							<span>🔋</span>
						</div>
					</div>

					<div className="content-area h-full overflow-y-auto px-6 pt-20 pb-16">
						<div className="flex items-center mb-6">
							<div className="profile-dot mr-3">👋</div>
							<span className="text-gray-700 font-normal">chase ponti</span>
						</div>
						<span className="inline-flex items-center">
							<span className="mr-1">🌴</span>
							<span>los angeles, california</span>
						</span>
						<div className="text-gray-500 mb-8 leading-relaxed font-light">
							<p className="text-xs text-gray-400 italic">
								Billions served since 1986.
							</p>
							<p className="flex flex-wrap items-center text-base mt-4">
								I'm a{" "}
								<a href="#software-engineer" className="inline-flex items-center ml-1 relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Software Engineer
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								,{" "}
								<a href="#designer" className="inline-flex items-center ml-1 relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Designer
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								,{" "}
								<a href="#writer" className="inline-flex items-center ml-1 relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Writer
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								,{" "}
								<a href="#podcaster" className="inline-flex items-center relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Podcaster
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								,{" "}
								<a href="#cultural-curator" className="inline-flex items-center ml-1 relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Cultural Curator
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								, and{" "}
								<a href="#modern-artist" className="inline-flex items-center relative group">
									<span className="text-gray-700 font-medium group-hover:font-bold">
										Modern Artist
									</span>
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform group-hover:scale-x-100" />
								</a>
								.
							</p>
						</div>

						<div className="text-gray-500 mb-6">
							Want to chat? Reach me on x or by email
						</div>

						<div className="flex flex-col gap-2">
							<a
								href="https://x.com/chaseallbridges"
								className="border-2 border-gray-300 rounded-full p-2 max-h-fit max-w-fit"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									role="img"
									className="h-4 w-4 text-gray-600"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>X</title>
									<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
								</svg>
							</a>
							<a
								href="mailto:hello@ponti.io?subject=Toys"
								className="flex items-center border-2 border-gray-200 pr-2 bg-gray-100 text-gray-600 rounded-full max-h-fit max-w-fit"
							>
								<span className="bg-yellow-300 px-2 py-1 rounded-full flex justify-center items-center mr-2">
									🧸
								</span>
								toys
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://instagram.com/chaseallbridges"
								className="flex items-center border-2 border-gray-200 pr-2 bg-gray-100 text-gray-600 rounded-full max-h-fit max-w-fit"
							>
								<span className="bg-purple-300 px-2 py-1 rounded-full flex justify-center items-center mr-2">
									🖼️
								</span>
								gallery
							</a>
						</div>
					</div>

					<div className="iphone-home-indicator" />
				</div>
			</div>
		</div>
	);
}

export default ChaseApp;
