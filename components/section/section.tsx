export const Section = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="bg-primary rounded-lg shadow-lg overflow-hidden my-9 p-8">
			{children}
		</div>
	);
};

export const SectionTitle = ({ children }: React.PropsWithChildren) => (
	<h2 className="text-3xl font-serif tracking-tight italic mb-4 text-gray-400">
		{children}
	</h2>
);
