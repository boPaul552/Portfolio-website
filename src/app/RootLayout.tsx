import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

// ─── Cursor ──────────────────────────────────────────────────────────────────

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [state, setState] = useState<"default" | "hover" | "drag" | "view">("default");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);
      if (ringRef.current) {
        const s = state === "hover" ? 44 : state === "view" ? 72 : state === "drag" ? 52 : 28;
        ringRef.current.style.transform = `translate(${ringPos.current.x - s / 2}px, ${ringPos.current.y - s / 2}px)`;
        ringRef.current.style.width = `${s}px`;
        ringRef.current.style.height = `${s}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [state]);

  useEffect(() => {
    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      if (el.dataset.cursor === "view") setState("view");
      else if (el.dataset.cursor === "drag") setState("drag");
      else setState("hover");
    };
    const leave = () => setState("default");

    const observe = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  const ringLabel = state === "view" ? "VIEW" : state === "drag" ? "DRAG" : "";

  return (
    <>
      <div ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/40 mix-blend-difference flex items-center justify-center transition-[width,height,opacity] duration-200"
        style={{ willChange: "transform" }}
      >
        {ringLabel && (
          <span className="font-['JetBrains_Mono',monospace] text-white text-[8px] tracking-wider">
            {ringLabel}
          </span>
        )}
      </div>
    </>
  );
}

// ─── Loader ──────────────────────────────────────────────────────────────────

function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const dur = 2400;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => { setExiting(true); setTimeout(onComplete, 900); }, 150);
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9994] bg-[#040404] flex flex-col justify-end px-10 md:px-14 pb-14 overflow-hidden"
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        style={{ transform: `scaleX(${count / 100})`, transformOrigin: "left", transition: "transform 0.08s linear" }}
      />
      <p className="font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-[0.35em] uppercase mb-5">
        bo-Paul Portfolio — Loading
      </p>
      <div className="flex items-baseline gap-3">
        <span className="font-['Space_Grotesk',sans-serif] font-bold text-white leading-none"
          style={{ fontSize: "clamp(72px, 14vw, 160px)" }}>
          {String(count).padStart(2, "0")}
        </span>
        <span className="font-['Space_Grotesk',sans-serif] text-white/15 font-bold text-4xl">%</span>
      </div>
      <p className="font-['Noto_Serif_SC',serif] text-white/30 text-sm mt-4 tracking-wide">
        修炼怎可懈怠，我不说停就不许停
      </p>
    </motion.div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loaderDone, setLoaderDone] = useState(false);

  // GitHub Pages SPA 路由恢复：
  // 404.html 会把用户原本访问的路径写入 sessionStorage，
  // 页面加载后我们用它跳转到正确的路由，避免刷新直接到首页。
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('spa-redirect');
      if (raw) {
        const info = JSON.parse(raw);
        sessionStorage.removeItem('spa-redirect');
        const target = (info.path || '/') + (info.query || '') + (info.hash || '');
        if (target && target !== location.pathname + location.search + location.hash) {
          navigate(target, { replace: true });
        }
      }
    } catch (e) {
      /* ignore */
    }
  }, [navigate, location.pathname, location.search, location.hash]);

  return (
    <div className="bg-[#040404] min-h-screen cursor-none overflow-x-hidden">
      <Cursor />

      <AnimatePresence>
        {!loaderDone && <Loader key="loader" onComplete={() => setLoaderDone(true)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaderDone ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
