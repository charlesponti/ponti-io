"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export function NavigationProgress() {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);
	const prevPathnameRef = useRef(pathname);

	// Check if pathname has changed
	if (prevPathnameRef.current !== pathname) {
		prevPathnameRef.current = pathname;
		if (!isLoading) {
			setIsLoading(true);
			// Use setTimeout to reset loading state
			setTimeout(() => setIsLoading(false), 300);
		}
	}

	if (!isLoading) return null;

	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
				<div className="h-full bg-white/30 animate-pulse" />
			</div>
		</div>
	);
}
