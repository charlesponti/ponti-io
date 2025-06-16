export default function CoronaLoading() {
	return (
		<div className="p-8 space-y-6">
			<div className="animate-pulse">
				{/* Stats Overview Loading */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
					<div className="bg-white/10 rounded-lg p-6 h-32" />
				</div>

				{/* Charts Loading */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div className="bg-white/10 rounded-lg p-6 h-80" />
					<div className="bg-white/10 rounded-lg p-6 h-80" />
					<div className="bg-white/10 rounded-lg p-6 h-80" />
					<div className="bg-white/10 rounded-lg p-6 h-80" />
				</div>

				{/* Additional Charts Loading */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white/10 rounded-lg p-6 h-80" />
					<div className="bg-white/10 rounded-lg p-6 h-80" />
				</div>
			</div>
		</div>
	);
}
