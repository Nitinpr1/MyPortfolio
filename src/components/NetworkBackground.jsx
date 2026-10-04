import { useEffect, useRef } from "react";

// muted, low-contrast tones
const DARK_COLORS = ["100,116,139", "71,85,105", "82,110,150", "90,120,115"];
const LIGHT_COLORS = ["148,130,120", "160,140,125", "130,125,140", "150,120,110"];

const NetworkBackground = ({ density = 22000, linkDistance = 150, maxParticles = 85 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999 };
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDark = () => document.documentElement.classList.contains("dark");

    let w, h, raf, particles = [];

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((w * h) / density), maxParticles);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.2 + 0.7,
        c: Math.floor(Math.random() * 4),
      }));
    };

    const draw = () => {
      const colors = isDark() ? DARK_COLORS : LIGHT_COLORS;
      const lineAlpha = isDark() ? 0.12 : 0.18;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDistance) {
            ctx.strokeStyle = `rgba(${colors[a.c]},${(1 - d / linkDistance) * lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < linkDistance * 1.4) {
          ctx.strokeStyle = `rgba(${colors[0]},${(1 - md / (linkDistance * 1.4)) * 0.25})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${colors[p.c]},0.45)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onResize = () => {
      init();
      if (reduceMotion) draw();
    };

    init();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density, linkDistance, maxParticles]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none dark:bg-[#0a0e17]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(30,58,100,0.3), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "75px 75px",
          color: "#64748b",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default NetworkBackground;