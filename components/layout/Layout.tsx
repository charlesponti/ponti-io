export default function Layout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div>
			<div className="">{children}</div>
		</div>
	);
}
