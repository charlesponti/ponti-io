// Global loading component for navigation transitions
export function NavigationLoader() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
		</div>
	);
}

// Page transition loading state
export function PageTransitionLoader() {
	return (
		<div className="flex items-center justify-center min-h-[400px]">
			<div className="text-center">
				<div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4" />
				<p className="text-blue-200">Loading page...</p>
			</div>
		</div>
	);
}

// Quick loading state for immediate feedback
export function QuickLoader() {
	return (
		<div className="animate-pulse space-y-4">
			<div className="h-4 bg-white/20 rounded w-3/4" />
			<div className="h-4 bg-white/20 rounded w-1/2" />
			<div className="h-32 bg-white/20 rounded" />
		</div>
	);
}
