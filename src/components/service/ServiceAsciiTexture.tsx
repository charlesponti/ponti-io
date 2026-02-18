import { useEffect, useRef } from "react";

interface ServiceAsciiTextureProps {
  seed: string;
  height?: number;
}

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function ServiceAsciiTexture({ seed, height = 12 }: ServiceAsciiTextureProps) {
  const textureRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimsRef = useRef({ width: 80, height });

  useEffect(() => {
    const textureEl = textureRef.current;
    const containerEl = containerRef.current;
    if (!textureEl || !containerEl) return;

    const seedHash = hashSeed(seed);
    const speed = 8 + (seedHash % 7);
    const primaryScale = 7 + (seedHash % 5);
    const secondaryScale = 4 + (seedHash % 4);

    const resize = () => {
      const widthPx = containerEl.clientWidth || 560;
      const chars = Math.max(40, Math.floor(widthPx / 7));
      dimsRef.current = { width: chars, height };
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(containerEl);

    let frame = 0;
    let rafId = 0;

    const draw = () => {
      let output = "";
      const { width, height: rows } = dimsRef.current;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const waveA = Math.sin(x / primaryScale + frame / speed) * 2;
          const waveB = Math.cos(x / secondaryScale - frame / (speed * 1.8)) * 1.5;
          const center = Math.floor(rows / 2 + waveA + waveB);

          if (y === center) {
            output += "~";
          } else if (y === center - 1) {
            output += "-";
          } else if ((x + y + seedHash + frame) % 19 === 0) {
            output += "+";
          } else {
            output += " ";
          }
        }
        output += "\n";
      }

      textureEl.textContent = output;
      frame += 1;
      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [seed, height]);

  return (
    <div ref={containerRef} className="opacity-20 text-white/50 pointer-events-none select-none">
      <pre
        ref={textureRef}
        className="leading-snug text-[8px] tracking-[0.2em] whitespace-pre h-32 w-full overflow-hidden"
        aria-hidden
      />
    </div>
  );
}
