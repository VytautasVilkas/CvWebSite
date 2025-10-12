// MatrixRainOverlay.jsx
import React, { useEffect, useRef } from "react";

export default function MatrixRainOverlay({
  fontSize = 14,
  fade = 0.08,
  spawnChance = 0.0025,
  speedMin = 2,
  speedMax = 6,
  fps = 30,
  opacity = 0.12,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const colsRef = useRef(0);
  const dropsRef = useRef([]);
  const speedsRef = useRef([]);
  const ctxRef = useRef(null);
  const dprRef = useRef(1);
  const lastRef = useRef(0);

  const chars =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resize = () => {
      const { innerWidth: w, innerHeight: h, devicePixelRatio: dprRaw = 1 } = window;
      const dpr = Math.min(1.5, dprRaw);
      dprRef.current = dpr;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      colsRef.current = Math.ceil(w / fontSize);
      dropsRef.current = new Array(colsRef.current).fill(-1);
      speedsRef.current = Array.from({ length: colsRef.current }, () =>
        Math.random() * (speedMax - speedMin) + speedMin
      );
      ctx.font = `${fontSize}px monospace`;
    };

    const draw = (now) => {
      const last = lastRef.current || now;
      const delta = now - last;
      const interval = 1000 / fps;
      if (delta < interval) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastRef.current = now;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.fillStyle = `rgba(0,0,0,${fade})`;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = `rgba(34,197,94,1)`;
      for (let i = 0; i < colsRef.current; i++) {
        if (dropsRef.current[i] < 0 && Math.random() < spawnChance) {
          dropsRef.current[i] = 0;
          speedsRef.current[i] = Math.random() * (speedMax - speedMin) + speedMin;
        }
        const y = dropsRef.current[i];
        if (y >= 0) {
          const x = i * fontSize;
          const ch = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(ch, x, y);
          dropsRef.current[i] += speedsRef.current[i];
          if (dropsRef.current[i] > h + fontSize * 8) dropsRef.current[i] = -1;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [fontSize, fade, spawnChance, speedMin, speedMax, fps]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[1000]"  // ⬅️ ABOVE your z-20 navbar/content
      style={{
        opacity,                 // try 0.18 briefly to verify visibility
        mixBlendMode: "normal",
      }}
    />
  );
}
