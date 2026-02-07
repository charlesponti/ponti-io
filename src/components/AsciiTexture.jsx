import { useEffect, useRef } from "react";

export default function AsciiTexture() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let frame = 0;
    let mounted = true;

    function animateTexture() {
      if (!mounted) return;
      let lines = "";
      for (let i = 0; i < 15; i++) {
        let line = "";
        for (let j = 0; j < 40; j++) {
          line += Math.random() > 0.98 ? "+" : Math.random() > 0.99 ? "·" : " ";
        }
        lines += line + "\n";
      }
      container.textContent = lines;
      frame++;
      if (frame % 10 === 0) requestAnimationFrame(animateTexture);
      else setTimeout(() => requestAnimationFrame(animateTexture), 100);
    }

    animateTexture();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      ref={ref}
      id="ascii-loading"
      className="absolute inset-0 flex items-center justify-center"
    />
  );
}
