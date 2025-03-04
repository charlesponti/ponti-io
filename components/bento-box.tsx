import cn from "classnames";

interface BentoBoxProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
	accent?: "lime" | "blue" | "purple" | "gray" | "black";
	spotlight?: boolean;
}

export function BentoBox({
	title,
	children,
	className = "",
	accent,
	spotlight,
}: BentoBoxProps) {
	return (
		<div
			className={cn(
				"p-8 py-12 rounded-2xl border backdrop-blur-sm transition-all duration-300",
				"hover:transform hover:scale-[1.02]",
				{
					"bg-lime-400/5 border-lime-400/20 hover:border-lime-400/40":
						accent === "lime",
					"bg-blue-400/5 border-blue-400/20 hover:border-blue-400/40":
						accent === "blue",
					"bg-purple-400/5 border-purple-400/20 hover:border-purple-400/40":
						accent === "purple",
					"bg-gray-300/5 border-gray-400/20 hover:border-gray-400/40":
						accent === "gray",
					"bg-gray-900 border-gray-900 border-opacity-80 hover:border-opacity-30 text-white":
						accent === "black",
					"bg-zinc-800/30 border-zinc-700/30 hover:border-zinc-600": !accent,
				},
				className,
			)}
		>
			{title ? (
				<h3 className="text-2xl font-medium mb-6 text-black-100">{title}</h3>
			) : null}
			{children}
		</div>
	);
}
