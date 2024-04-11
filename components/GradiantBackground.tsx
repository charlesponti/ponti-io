export default function GradientBackground() {
	return (
		<div
			style={{
				width: "100vw",
				minHeight: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 0,
				display: "flex",
				justifyContent: "center",
				padding: "120px 24px 160px 24px",
				pointerEvents: "none",
			}}
		>
			<div
				style={{
					background:
						"radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)",
					position: "absolute",
					content: '""',
					zIndex: 2,
					width: "100%",
					height: "100%",
					top: 0,
				}}
			/>
			<div
				style={{
					content: '""',
					backgroundImage: "url(https://assets.dub.co/misc/grid.svg)",
					zIndex: 1,
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					opacity: "0.4",
					filter: "invert(1)",
				}}
			/>
			<div
				style={{
					zIndex: 0,
					width: "100%",
					maxWidth: "640px",
					position: "absolute",
					height: "100%",
					filter: "blur(100px) saturate(150%)",
					top: "80px",
					opacity: "0.15",
					backgroundImage: `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), 
            radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
          `,
				}}
			/>
		</div>
	);
}
