import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { PROJECTS, CATEGORIES, type ImageSlot } from "./data";

// ─── Scroll Progress Bar ─────────────────────────────────────────────────────

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setProgress(el.scrollTop / (el.scrollHeight - el.clientHeight));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-white/5">
      <div className="h-full bg-white/50 transition-none" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

// ─── Top Bar ─────────────────────────────────────────────────────────────────

function TopBar({ title }: { title: string }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.div
      className="fixed top-2 left-0 right-0 z-[150] flex items-center justify-between px-8 md:px-14"
      style={{ height: 56 }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`absolute inset-0 rounded-none transition-all duration-500 ${scrolled ? "bg-[#040404]/85 backdrop-blur-md" : ""}`} />

      {/* Back button */}
      <button
        data-cursor
        onClick={() => navigate(-1)}
        className="relative z-10 flex items-center gap-2.5 group"
      >
        <motion.span
          className="font-['JetBrains_Mono',monospace] text-white/40 text-sm group-hover:text-white transition-colors duration-300"
          whileHover={{ x: -3 }}
          transition={{ duration: 0.25 }}
        >
          ←
        </motion.span>
        <span className="font-['JetBrains_Mono',monospace] text-white/35 text-xs tracking-wider group-hover:text-white/65 transition-colors duration-300 uppercase">
          Back
        </span>
      </button>

      {/* Project title — appears on scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.span
            className="relative z-10 font-['Noto_Serif_SC',serif] text-white/55 text-sm absolute left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Index dot */}
      <div className="relative z-10 w-2 h-2 rounded-full bg-white/20" />
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function DetailHero({ project }: { project: typeof PROJECTS[0] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" style={{ position: "relative" }}>
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={project.heroImage}
          alt={project.titleEn}
          className="w-full h-[115%] object-cover object-center"
        />
        {/* Cinematic overlays — neutral dark frame */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(to bottom, rgba(4,4,4,0.7) 0%, transparent 22%),
            linear-gradient(to top, rgba(4,4,4,0.92) 0%, rgba(4,4,4,0.4) 30%, transparent 55%),
            linear-gradient(to right, rgba(4,4,4,0.15) 0%, transparent 40%)
          `,
        }} />
      </motion.div>

      {/* Title overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 z-10"
        style={{ y: textY, opacity: fade }}
      >
        <motion.p
          className="font-['JetBrains_Mono',monospace] text-white/40 text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {project.index} — {CATEGORIES.find(c => c.key === project.category)?.zh}
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-['Noto_Serif_SC',serif] font-black text-white leading-none"
            style={{ fontSize: "clamp(36px, 6.5vw, 88px)" }}
            initial={{ y: "102%" }} animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h1>
        </div>

        <motion.p
          className="font-['JetBrains_Mono',monospace] text-white/35 text-sm mt-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {project.titleEn}
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-12 right-8 md:right-14 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="w-px h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-white/60"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "250%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ─── Project Meta ─────────────────────────────────────────────────────────────

function MetaStrip({ project }: { project: typeof PROJECTS[0] }) {
  const items = [
    { label: "年份", val: project.year },
    { label: "角色", val: project.role },
    { label: "周期", val: project.duration },
    { label: "类别", val: CATEGORIES.find(c => c.key === project.category)?.zh ?? "" },
  ];

  return (
    <motion.div
      className="border-b border-white/8 px-8 md:px-14 py-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-wrap gap-10 md:gap-16 items-start">
        {items.map((item, i) => (
          <div key={item.label}>
            <p className="font-['JetBrains_Mono',monospace] text-white/22 text-[10px] tracking-[0.3em] uppercase mb-1.5">
              {item.label}
            </p>
            <p className="font-['Space_Grotesk',sans-serif] text-white/65 text-sm">{item.val}</p>
          </div>
        ))}
        <div className="ml-auto">
          <p className="font-['JetBrains_Mono',monospace] text-white/18 text-[10px] tracking-[0.3em] uppercase mb-1.5">Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="font-['JetBrains_Mono',monospace] text-white/38 text-[10px] border border-white/8 px-2 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Overview ─────────────────────────────────────────────────────────────────

function Overview({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div className="px-8 md:px-14 py-16 md:py-24 border-b border-white/8">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] tracking-[0.32em] uppercase mb-4">
            Project Overview
          </p>
          {/* Large decorative index */}
          <div className="font-['Space_Grotesk',sans-serif] font-bold text-white/5 leading-none select-none"
            style={{ fontSize: "clamp(80px, 14vw, 160px)" }}>
            {project.index}
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['JetBrains_Mono',monospace] text-white/22 text-[10px] tracking-[0.32em] uppercase mb-5">
              Overview
            </p>
            <p className="font-['Noto_Serif_SC',serif] text-white/70 leading-[1.95] text-base md:text-lg">
              {project.overview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['JetBrains_Mono',monospace] text-white/22 text-[10px] tracking-[0.32em] uppercase mb-5">
              Challenge
            </p>
            <p className="font-['Noto_Serif_SC',serif] text-white/45 leading-[1.95] text-sm md:text-base italic">
              "{project.challenge}"
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Image Document (Zcool article style) ────────────────────────────────────

function ImageDocument({ images }: { images: ImageSlot[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      {/* ── Article body ─────────────────────────────────────────────────── */}
      <div className="border-b border-white/8 py-16 md:py-24">
        {/* Reading column — generous max-width, centred */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-14">

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Section divider */}
              {img.section && (
                <div
                  className={`flex items-center gap-3 mb-8 ${i > 0 ? "mt-16 md:mt-20 pt-8 border-t border-white/8" : "mb-10"}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/35 flex-shrink-0" />
                  <p className="font-['JetBrains_Mono',monospace] text-white/30 text-[11px] tracking-[0.35em] uppercase">
                    {img.section}
                  </p>
                </div>
              )}

              {/* Image — full width, natural height, no crop */}
              <figure
                className="cursor-none group"
                data-cursor="view"
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-auto block"
                    style={{ display: "block" }}
                    whileHover={{ scale: 1.012 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Subtle hover veil */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/3 transition-colors duration-500 pointer-events-none" />
                </div>

                {img.caption && (
                  <figcaption className="mt-4 flex items-start gap-2.5">
                    <span className="font-['JetBrains_Mono',monospace] text-white/15 text-[11px] flex-shrink-0 mt-px">—</span>
                    <p className="font-['JetBrains_Mono',monospace] text-white/28 text-[11px] tracking-wide leading-relaxed">
                      {img.caption}
                    </p>
                  </figcaption>
                )}
              </figure>

              {/* Vertical rhythm spacer between images without a section label */}
              {i < images.length - 1 && !images[i + 1]?.section && (
                <div className="h-10 md:h-14" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button data-cursor
              className="absolute top-5 right-8 font-['JetBrains_Mono',monospace] text-white/40 text-[11px] tracking-widest hover:text-white transition-colors z-10"
              onClick={() => setLightbox(null)}>
              ESC · CLOSE
            </button>

            {/* Counter */}
            <p className="absolute top-5 left-1/2 -translate-x-1/2 font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-wider">
              {lightbox + 1} / {images.length}
            </p>

            {/* Prev */}
            {lightbox > 0 && (
              <button data-cursor
                className="absolute left-4 md:left-8 font-['JetBrains_Mono',monospace] text-white/35 text-xl hover:text-white transition-colors z-10 p-4"
                onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? l - 1 : null); }}>←
              </button>
            )}
            {/* Next */}
            {lightbox < images.length - 1 && (
              <button data-cursor
                className="absolute right-4 md:right-8 font-['JetBrains_Mono',monospace] text-white/35 text-xl hover:text-white transition-colors z-10 p-4"
                onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? l + 1 : null); }}>→
              </button>
            )}

            {/* Image */}
            <motion.div
              className="relative w-full max-w-5xl mx-14 md:mx-20 flex flex-col items-center"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[lightbox].url}
                alt={images[lightbox].alt}
                className="w-full h-auto max-h-[82vh] object-contain block"
              />
              {images[lightbox].caption && (
                <p className="font-['JetBrains_Mono',monospace] text-white/30 text-[11px] mt-4 text-center tracking-wider max-w-xl">
                  {images[lightbox].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Horizontal Drag Strip ────────────────────────────────────────────────────

function HorizontalStrip({ urls }: { urls: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  }, []);

  const onUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "none";
  }, []);

  return (
    <div className="py-14 md:py-20 border-b border-white/8">
      <motion.div className="px-8 md:px-14 mb-8 flex items-center justify-between"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] tracking-[0.32em] uppercase">
          Image Strip — Drag to Explore
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-px bg-white/20" />
          <div className="w-2 h-2 rounded-full border border-white/25" />
        </div>
      </motion.div>

      <div
        ref={trackRef}
        data-cursor="drag"
        className="flex gap-4 overflow-x-auto scrollbar-none px-8 md:px-14 select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        {urls.map((url, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 overflow-hidden bg-white/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4) }}
          >
            <img src={url} alt="" className="w-full h-full object-cover pointer-events-none" draggable={false} />
          </motion.div>
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-8 md:w-14" />
      </div>
    </div>
  );
}

// ─── Next Project ──────────────────────────────────────────────────────────────

function NextProject({ current }: { current: typeof PROJECTS[0] }) {
  const idx = PROJECTS.findIndex(p => p.id === current.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/project/${next.id}`}
      data-cursor
      className="block border-t border-white/8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden px-8 md:px-14 py-20 md:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Hover image peek */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={next.heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#040404]/70" />
        </motion.div>

        <div className="relative z-10">
          <motion.p
            className="font-['JetBrains_Mono',monospace] text-white/30 text-[11px] tracking-[0.35em] uppercase mb-5"
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Next Project
          </motion.p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <motion.h3
                className="font-['Noto_Serif_SC',serif] font-black text-white leading-none"
                style={{ fontSize: "clamp(32px, 6vw, 80px)" }}
                animate={{ x: hovered ? 12 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {next.title}
              </motion.h3>
              <p className="font-['JetBrains_Mono',monospace] text-white/30 text-xs mt-2">{next.titleEn}</p>
            </div>

            <motion.div
              className="font-['Space_Grotesk',sans-serif] text-white/40 text-4xl flex-shrink-0"
              animate={{ x: hovered ? 8 : 0, opacity: hovered ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
            >
              →
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {next.tags.slice(0, 3).map(t => (
              <span key={t} className="font-['JetBrains_Mono',monospace] text-white/25 text-[10px] border border-white/8 px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Project Detail Page ───────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-['JetBrains_Mono',monospace] text-white/30 text-sm">项目未找到</p>
        <button data-cursor onClick={() => navigate("/")}
          className="font-['JetBrains_Mono',monospace] text-white/50 text-xs border border-white/15 px-4 py-2 hover:text-white hover:border-white/40 transition-colors">
          ← 返回首页
        </button>
      </div>
    );
  }

  return (
    <>
      <ProgressBar />
      <TopBar title={project.title} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DetailHero project={project} />
        <MetaStrip project={project} />
        <Overview project={project} />
        <ImageDocument images={project.images} />
        <HorizontalStrip urls={project.horizontalStrip} />
        <NextProject current={project} />

        {/* Footer */}
        <div className="px-8 md:px-14 py-8 border-t border-white/8 flex items-center justify-between">
          <Link to="/" data-cursor
            className="font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-wider hover:text-white/55 transition-colors flex items-center gap-2">
            <span>←</span>
            <span>All Projects</span>
          </Link>
          <p className="font-['JetBrains_Mono',monospace] text-white/15 text-[11px]">Copyright 2026 © bo-Paul</p>
        </div>
      </motion.main>
    </>
  );
}
