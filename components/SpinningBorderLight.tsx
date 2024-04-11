import type { PropsWithChildren } from "react";
import styles from "./SpinningBorderLight.module.css";

export default function SpinningBorderLight() {
	return <div className={styles.spinnerBorderLight} />;
}

export function SpinningBorderButton({
	children,
	...props
}: PropsWithChildren) {
	return (
		<button {...props}>
			<SpinningBorderLight />
			{children}
		</button>
	);
}
