import Link from "next/link";

export default function CoronaNotFound() {
	return (
		<div className="p-8 text-center">
			<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-md p-8 max-w-md mx-auto">
				<h2 className="text-2xl font-bold text-white mb-4">
					Country Not Found
				</h2>
				<p className="text-blue-200 mb-6">
					The requested country code is not available in our COVID-19 database.
				</p>
				<Link
					href="/corona/OWID_WRL"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
				>
					View World Data
				</Link>
			</div>
		</div>
	);
}
