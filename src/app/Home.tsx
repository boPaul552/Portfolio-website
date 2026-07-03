import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import heroImg from "@/imports/1/f6ee6e24865f97f643e7b77e10497c2451be72ef.png";
import { PROJECTS, CATEGORIES, type Category } from "./data";

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav({ active, onFilter }: { active: Category; onFilter: (c: Category) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-14"
      style={{ height: 68 }}
      initial={{ y: -68, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? "bg-[#040404]/90 backdrop-blur-md border-b border-white/5" : ""}`} />

      <div className="relative z-10 flex items-center gap-2.5">
        <div className="w-[9px] h-[9px] rounded-full bg-white/75" />
        <div className="w-[9px] h-[9px] rounded-full border border-white/40" />
        <span className="font-['JetBrains_Mono',monospace] text-white/50 text-xs ml-1.5">Lucky 2026</span>
      </div>

      <nav className="relative z-10 hidden md:flex items-center gap-7">
        {CATEGORIES.slice(1).map(cat => (
          <button key={cat.key} data-cursor
            onClick={() => { onFilter(cat.key); document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }); }}
            className={`font-['JetBrains_Mono',monospace] text-[11px] tracking-wider uppercase transition-all duration-300 ${active === cat.key ? "text-white" : "text-white/35 hover:text-white/65"}`}
          >
            {cat.zh}
          </button>
        ))}
      </nav>

      <span className="relative z-10 font-['JetBrains_Mono',monospace] text-white/30 text-[11px] tracking-wider hidden md:block">
        修炼怎可懈怠
      </span>
    </motion.header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" style={{ position: "relative" }}>
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img src={heroImg} alt="" className="w-full h-[115%] object-cover object-center" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #040404 0%, transparent 14%), linear-gradient(to top, #040404 0%, transparent 18%), radial-gradient(ellipse at 62% 32%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }} />
      </motion.div>

      {/* Side text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <p className="font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-[0.28em] uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Everything is permitted
        </p>
      </div>

      <motion.div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 z-10" style={{ opacity: fade }}>
        <motion.p className="font-['JetBrains_Mono',monospace] text-white/45 text-sm mb-10"
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          Hello, i'm a UI designer.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <span className="font-['Space_Grotesk',sans-serif] font-bold text-white leading-none"
            style={{ fontSize: "clamp(56px, 9.5vw, 116px)", letterSpacing: "0.1em" }}>
            2&nbsp;&nbsp;&nbsp;26
          </span>
        </motion.div>

        <div className="overflow-hidden mt-1">
          <motion.h1 className="font-['Noto_Serif_SC',serif] font-black text-white leading-none"
            style={{ fontSize: "clamp(44px, 7.5vw, 100px)" }}
            initial={{ y: "105%" }} animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            设计作品集
          </motion.h1>
        </div>

        <motion.p className="font-['JetBrains_Mono',monospace] text-white/40 text-sm mt-8 max-w-md leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}>
          Add my WeChat: <span className="text-white/65">173 2297 5039</span>
        </motion.p>
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 md:px-14 pb-8 z-10">
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.7 }}>
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span className="font-['JetBrains_Mono',monospace] text-white/35 text-xs">Cease 2024~2026</span>
        </motion.div>

        <motion.p className="font-['Noto_Serif_SC',serif] text-white/35 text-xs text-center leading-relaxed hidden md:block"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.7 }}>
          「生命的每一刻都是走出旧路的新起点，就在此时此地，这一刻就是我的新起点」
        </motion.p>

        <motion.button data-cursor onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
          className="font-['JetBrains_Mono',monospace] text-white/35 text-[11px] tracking-widest hover:text-white/65 transition-colors"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 0.7 }}>
          SCROLL ↓
        </motion.button>
      </div>
    </section>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, i }: { project: typeof PROJECTS[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const cat = CATEGORIES.find(c => c.key === project.category);

  return (
    <motion.article
      className="relative border-t border-white/10 overflow-hidden"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/project/${project.id}`} data-cursor="view" className="block">
        <div className="flex flex-col md:flex-row md:items-center py-7 md:py-9 gap-5 md:gap-0 relative z-10 px-8 md:px-14">
          {/* Index */}
          <div className="md:w-44 flex-shrink-0">
            <span className="font-['JetBrains_Mono',monospace] text-white/18 text-xs">{project.index}</span>
            <p className="font-['JetBrains_Mono',monospace] text-white/30 text-[11px] mt-0.5 tracking-wide">{cat?.zh}</p>
          </div>

          {/* Title */}
          <div className="flex-1">
            <motion.h3
              className="font-['Noto_Serif_SC',serif] font-bold text-white leading-tight"
              style={{ fontSize: "clamp(20px, 2.8vw, 40px)" }}
              animate={{ x: hovered ? 8 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              {project.title}
            </motion.h3>
            <p className="font-['JetBrains_Mono',monospace] text-white/25 text-xs mt-1">{project.titleEn}</p>
          </div>

          {/* Description / Tags */}
          <div className="md:w-64 flex-shrink-0">
            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.p key="desc" className="font-['Noto_Serif_SC',serif] text-white/45 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {project.description}
                </motion.p>
              ) : (
                <motion.div key="tags" className="flex flex-wrap gap-1.5"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="font-['JetBrains_Mono',monospace] text-white/22 text-[10px] border border-white/8 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Year + arrow */}
          <div className="md:w-20 flex-shrink-0 hidden md:flex items-center justify-end gap-4">
            <span className="font-['JetBrains_Mono',monospace] text-white/22 text-xs">{project.year}</span>
            <motion.span className="text-white/30 text-sm" animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.35 }}>→</motion.span>
          </div>
        </div>
      </Link>

      {/* Hover tint */}
      <motion.div className="absolute inset-0 -z-0 pointer-events-none"
        style={{ backgroundColor: project.accent }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }} />
    </motion.article>
  );
}

// ─── Works Section ────────────────────────────────────────────────────────────

function Works({ active, onFilter }: { active: Category; onFilter: (c: Category) => void }) {
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="works" className="min-h-screen pt-24 pb-16">
      <div className="px-8 md:px-14 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-[0.32em] uppercase mb-3">
            Selected Works
          </p>
          <h2 className="font-['Noto_Serif_SC',serif] font-bold text-white" style={{ fontSize: "clamp(28px, 4.5vw, 58px)" }}>
            作品项目
          </h2>
        </motion.div>

        <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.key} data-cursor onClick={() => onFilter(cat.key)}
              className={`font-['JetBrains_Mono',monospace] text-[11px] tracking-wider px-4 py-2 border transition-all duration-300 ${active === cat.key ? "border-white/50 text-white bg-white/5" : "border-white/10 text-white/30 hover:border-white/22 hover:text-white/52"}`}>
              {cat.zh}
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} i={i} />)}
        </motion.div>
      </AnimatePresence>

      <div className="px-8 md:px-14 mt-4 border-t border-white/10 pt-4">
        <p className="font-['JetBrains_Mono',monospace] text-white/15 text-[11px] tracking-wider">
          {filtered.length} / {PROJECTS.length} 项目
        </p>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section className="px-8 md:px-14 py-24 md:py-32 border-t border-white/8">
      {/* ── Name + awards banner ───────────────────────────────────────────── */}
      <motion.div
        className="mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-['JetBrains_Mono',monospace] text-white/25 text-[11px] tracking-[0.32em] uppercase mb-6">About</p>

        {/* Large name */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8">
          <h2 className="font-['Noto_Serif_SC',serif] font-black text-white leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
            刘锦波
          </h2>
          <span className="font-['JetBrains_Mono',monospace] text-white/30 text-sm tracking-widest mb-2 md:mb-3">
            bo-Paul
          </span>
        </div>

        {/* Award badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "国企单位 UI 设计师",
            "蓝桥杯 UI 设计 · 国赛二等奖",
            "省赛一等奖",
            "三次国家级奖学金",
          ].map(badge => (
            <span key={badge}
              className="font-['JetBrains_Mono',monospace] text-white/50 text-[11px] border border-white/15 px-3 py-1.5 tracking-wide">
              · {badge}
            </span>
          ))}
        </div>

        {/* Impact stats */}
        <div className="flex flex-wrap gap-10 md:gap-16 border-t border-white/8 pt-8">
          {[
            { num: "7,324,186", label: "链码电子签服务用户", sub: "截至 2026 年 3 月" },
            { num: "1,724,125", label: "服务政企解决方案", sub: "截至 2026 年 3 月" },
            { num: "3+", label: "年 UI 设计工作经验", sub: "B端 · C端 · 多端设备" },
          ].map(s => (
            <div key={s.num}>
              <p className="font-['Space_Grotesk',sans-serif] font-bold text-white/80 leading-none mb-1"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                {s.num}
              </p>
              <p className="font-['Noto_Serif_SC',serif] text-white/40 text-xs">{s.label}</p>
              <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Existing two-column bio ────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <h3 className="font-['Noto_Serif_SC',serif] font-bold text-white mb-7 leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>关于我</h3>
          <p className="font-['Noto_Serif_SC',serif] text-white/50 text-base leading-[1.9] mb-5">
            bo-Paul — 专注于界面设计与视觉探索的设计师。相信好的设计应该兼具功能性与情感温度。
          </p>
          <p className="font-['Noto_Serif_SC',serif] text-white/35 leading-[1.9] text-sm">
            从品牌系统到移动应用，从数据可视化到交互原型，我尝试在每一个项目中找到独特的视觉语言，将复杂的信息转化为直觉性的体验。
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            {[{ label: "项目经验", val: "2024—" }, { label: "设计方向", val: "UI / Visual" }, { label: "工作地", val: "China" }].map(item => (
              <div key={item.label}>
                <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] tracking-wider mb-1">{item.label}</p>
                <p className="font-['Space_Grotesk',sans-serif] text-white/60 text-sm">{item.val}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 space-y-2">
            <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] tracking-[0.3em] uppercase mb-3">Contact</p>
            <p className="font-['JetBrains_Mono',monospace] text-white/45 text-sm">WeChat: 173-2297-5039</p>
            <a href="mailto:17967491931@qq.com" data-cursor
              className="font-['JetBrains_Mono',monospace] text-white/35 text-sm hover:text-white/65 transition-colors block">
              17967491931@qq.com
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <p className="font-['JetBrains_Mono',monospace] text-white/20 text-[10px] tracking-[0.32em] uppercase mb-7">Skills</p>
          {[
            { cat: "设计工具", items: ["Figma", "Illustrator", "Photoshop", "Principle"] },
            { cat: "能力方向", items: ["界面设计", "视觉系统", "交互原型", "品牌设计"] },
            { cat: "了解前端", items: ["HTML/CSS", "React", "Framer", "Motion"] },
          ].map(g => (
            <div key={g.cat} className="mb-7">
              <p className="font-['Noto_Serif_SC',serif] text-white/28 text-sm mb-2.5">{g.cat}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="font-['JetBrains_Mono',monospace] text-white/42 text-[11px] border border-white/8 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-2 mt-2">
            <a href="https://i.ui.cn/ucenter/1951376" target="_blank" rel="noopener noreferrer" data-cursor
              className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-white/45 hover:text-white hover:border-white/40 transition-all duration-300 font-['JetBrains_Mono',monospace] text-xs group">
              <span>站酷主页</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="px-8 md:px-14 py-10 border-t border-white/8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <p className="font-['JetBrains_Mono',monospace] text-white/18 text-[10px] mb-1.5 tracking-wider">CONTACT</p>
          <p className="font-['JetBrains_Mono',monospace] text-white/40 text-sm">WeChat: 173 2297 5039</p>
        </div>
        <p className="font-['Noto_Serif_SC',serif] text-white/12 text-xs leading-relaxed">
          「修炼怎可懈怠，我不说停就不许停」
        </p>
        <p className="font-['JetBrains_Mono',monospace] text-white/18 text-[11px]">
          Copyright 2026 © bo-Paul
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState<Category>("all");
  return (
    <>
      <Nav active={active} onFilter={setActive} />
      <Hero />
      <Works active={active} onFilter={setActive} />
      <About />
      <Footer />
    </>
  );
}
