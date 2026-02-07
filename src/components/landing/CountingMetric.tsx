import { useEffect, useRef } from "react";

interface CountingMetricProps {
  label?: string;
  start?: number;
  perSecond?: number; // how much to add per second
  decimals?: number;
  className?: string;
}

export default function CountingMetric({
  label = "DATA POINTS",
  start = 0,
  perSecond = 12,
  decimals = 0,
  className = "",
}: CountingMetricProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const valueRef = useRef<number>(start);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const render = (now: number) => {
      if (lastRef.current === null) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      valueRef.current = valueRef.current + perSecond * dt;
      lastRef.current = now;

      const displayed = valueRef.current.toFixed(decimals);
      // format with grouping separators for readability
      const [intPart, fracPart] = displayed.split(".");
      const intFormatted = Number(intPart).toLocaleString();
      el.querySelector(".count")!.textContent = fracPart
        ? `${intFormatted}.${fracPart}`
        : intFormatted;

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [perSecond, decimals]);

  return (
    <div
      ref={elRef}
      className={`items-start gap-1 text-white/90 ${className} text-[10px] font-mono`}
    >
      <span>{label}:</span> <span className="count">{start.toFixed(decimals)}</span>
    </div>
  );
}
