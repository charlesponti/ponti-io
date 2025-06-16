"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationProgress() {
	const [isLoading, setIsLoading] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		// Show loading state immediately when pathname changes
		setIsLoading(true);

		// Hide loading state after a short delay to allow page to render
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pathname]); // pathname dependency is needed to trigger on route changes

	if (!isLoading) return null;

	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
				<div className="h-full bg-white/30 animate-pulse" />
			</div>
		</div>
	);
}
