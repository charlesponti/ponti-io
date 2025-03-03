import CountUp from "react-countup";

interface CountUpToProps {
	value: number;
}

function CountUpTo({ value }: CountUpToProps): JSX.Element {
	return <CountUp duration={1.5} end={value} separator="," start={0} />;
}

export default CountUpTo;
