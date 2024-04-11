export default function Layout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div>
			<div className="antialiased dark:bg-black dark:text-white">
				{children}
			</div>
		</div>
	);
}
