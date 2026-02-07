import { useEffect, useRef } from "react";
import CountingMetric from "./CountingMetric";

const WAVE_HEIGHT = 12;

/**
 * Hero component rebuilt to mirror the VOID reference aesthetic:
 * - ASCII wave rendered with rAF for a living-but-still feel
 * - No gradients, no motion on UI elements, only the data signal
 * - Left/right header labels for system status
 */
export default function Hero() {
  const waveRef = useRef<HTMLPreElement>(null);
  const waveContainerRef = useRef<HTMLDivElement>(null);
  const dimsRef = useRef({ width: 80, height: WAVE_HEIGHT });

  useEffect(() => {
    const el = waveRef.current;
    const container = waveContainerRef.current;
    if (!el || !container) return;

    const resize = () => {
      const widthPx = container.clientWidth || 560;
      // Approx monospace char width ~7px at 8px font-size; clamp to avoid collapse
      const chars = Math.max(40, Math.floor(widthPx / 7));
      dimsRef.current = { width: chars, height: WAVE_HEIGHT };
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    let frame = 0;
    let rafId: number;

    const drawWave = () => {
      let output = "";

      const { width, height } = dimsRef.current;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const wave = Math.sin(x / 10 + frame / 10) * 3;
          const wave2 = Math.cos(x / 5 - frame / 20) * 2;
          const combined = Math.floor(height / 2 + wave + wave2);

          if (y === combined) {
            output += "~";
          } else if (y === combined - 1) {
            output += "-";
          } else {
            output += " ";
          }
        }
        output += "\n";
      }

      el.textContent = output;
      frame += 1;
      rafId = requestAnimationFrame(drawWave);
    };

    drawWave();
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="void-shell min-h-screen flex flex-col justify-center max-w-screen-md w-full mx-auto relative px-6 md:px-12 lg:px-20 py-16">
      {/* ASCII Wave and Metrics side by side */}
      <div className="flex flex-row items-start gap-8 relative">
        {/* ASCII Wave */}
        <div
          className="opacity-20 text-white/50 pointer-events-none select-none flex-1"
          ref={waveContainerRef}
        >
          <pre
            ref={waveRef}
            className="leading-snug text-[8px] tracking-[0.2em] whitespace-pre h-32 w-full overflow-hidden"
            aria-hidden
          />
        </div>
      </div>

      {/* Hero Copy */}
      <div className="flex flex-col gap-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight uppercase">
          Intelligence that works.
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-2/3 space-y-10">
            <p className="text-lg leading-relaxed text-white/70 max-w-xl">
              WE REDUCE UNTIL ONLY THE ESSENCE REMAINS. ONLY DATA. ONLY TRUTH. NO DECEPTION.
            </p>
          </div>

          <aside className="w-full md:w-1/3 structural-line pt-8 opacity-50 text-[10px] leading-tight tracking-[0.08em] uppercase">
            [METRICS]
            <div className="my-2" />
            <CountingMetric label="DATA POINTS" start={12000} perSecond={40} decimals={0} />
            LATENCY: 0.04ms
            <br />
            REDUCTION: 99.8%
            <br />
            DISTRACTION_INDEX: 0.00
            <br />
            SYSTEM_STATUS: <span className="text-green-500">ACTIVE</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
