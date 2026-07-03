// ─── Local project images — blockchain e-sign project ─────────────────────────
import img41  from "@/imports/4-1.jpg";
import img51  from "@/imports/5-1.jpg";
import img61  from "@/imports/6-1.jpg";
import img71  from "@/imports/7-1.jpg";
import img81  from "@/imports/8-1.jpg";
import img91  from "@/imports/9-1.jpg";
import img101 from "@/imports/10-1.jpg";
import img11  from "@/imports/11.jpg";
import img12  from "@/imports/12.jpg";
import img13  from "@/imports/13.jpg";
import img14  from "@/imports/14.jpg";
import img15  from "@/imports/15.jpg";
import img16  from "@/imports/16.jpg";
import img17  from "@/imports/17.jpg";
import img18  from "@/imports/18.jpg";
import img19  from "@/imports/19.jpg";
import img20  from "@/imports/20.jpg";
import img21  from "@/imports/21.jpg";
import img22  from "@/imports/22.jpg";

// ─── Local project images — 穗智链 · 城市级政务区块链门户项目 ──────────────
import img23 from "@/imports/23.jpg";
import img24 from "@/imports/24.jpg";
import img25 from "@/imports/25.jpg";
import img26 from "@/imports/26.jpg";
import img27 from "@/imports/27.jpg";
import img28 from "@/imports/28.jpg";
import img29 from "@/imports/29.jpg";
import img30 from "@/imports/30.jpg";
import img31 from "@/imports/31.jpg";
import img32 from "@/imports/32.jpg";

// ─── Local project images — 植花 App · 植物科普应用项目 ───────────────────
import img33 from "@/imports/33.jpg";
import img34 from "@/imports/34.jpg";
import img35 from "@/imports/35.jpg";
import img36 from "@/imports/36.jpg";
import img37 from "@/imports/37.jpg";
import img38 from "@/imports/38.jpg";
import img39 from "@/imports/39.jpg";

// ─── Local project images — 第四个项目（Slice 1-12） ───────────────────
import s1  from "@/imports/Slice 1.png";
import s2  from "@/imports/Slice 2.png";
import s3  from "@/imports/Slice 3.png";
import s4  from "@/imports/Slice 4.png";
import s5  from "@/imports/Slice 5.jpg";
import s6  from "@/imports/Slice 6.jpg";
import s7  from "@/imports/Slice 7.jpg";
import s8  from "@/imports/Slice 8.jpg";
import s9  from "@/imports/Slice 9.jpg";
import s10 from "@/imports/Slice 10.jpg";
import s11 from "@/imports/Slice 11.jpg";
import s12 from "@/imports/Slice 12.jpg";

// ─── Local project images — 项目008（广州市政务区块链基础平台 V2.0） ───
import dt1  from "@/imports/Desktop - 1.jpg";
import dt2  from "@/imports/Desktop - 2.jpg";
import dt3  from "@/imports/Desktop - 3.jpg";
import dt4  from "@/imports/Desktop - 4.jpg";
import dt5  from "@/imports/Desktop - 5.jpg";
import dt6  from "@/imports/Desktop - 6.jpg";
import dt7  from "@/imports/Desktop - 7.jpg";
import dt8  from "@/imports/Desktop - 8.jpg";
import dt9  from "@/imports/Desktop - 9.jpg";
import dt10 from "@/imports/Desktop - 10.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ImageSlot = {
  url: string;
  alt: string;
  caption?: string;
  /** Renders a labeled section divider above this image */
  section?: string;
};

export type Project = {
  id: string;
  title: string;
  titleEn: string;
  category: "stories" | "experience" | "visual";
  year: string;
  role: string;
  duration: string;
  tags: string[];
  description: string;
  overview: string;
  challenge: string;
  accent: string;
  index: string;
  heroImage: string;
  images: ImageSlot[];
  horizontalStrip: string[];
};

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "blockchain-sign",
    title: "链码电子签 · 体验升级重塑",
    titleEn: "Chaincode E-Sign — UX Redesign",
    category: "stories",
    year: "2024—2025",
    role: "UI 设计师 / UX Research",
    duration: "持续迭代",
    tags: ["UX Design", "B 端产品", "区块链", "体验升级", "交互重塑"],
    description:
      "基于区块链技术重塑电子签章全链路体验，三套方案经 AB 测试验证，签章完成率最终提升 23.6%。",
    overview:
      "链码电子签是以广州市「穗智链」区块链基础平台为支撑的可信电子签章产品，面向政企客户，服务超过 20 万家企业。本次体验升级以「提升签章完成率与印章开通率」为核心目标，从用户行为研究出发，通过三个关键设计成果（KR）逐步推进：交互重塑、视觉触发点放大、操作成本降低，最终以数据驱动验证设计决策。",
    challenge:
      "用户在首次接触产品时普遍反馈「找不到入口、不知道怎么操作」。如何在不改变底层业务逻辑的前提下，通过视觉与交互手段降低认知负担，显著提升签章完成率——是本次设计的核心命题。",
    accent: "#060d1a",
    index: "001",
    heroImage: img41,
    images: [
      {
        url: img41,
        alt: "区块链平台项目体验升级建设 — 项目背景全览",
        section: "项目背景",
        caption: "UI/UX · 体验设计 — 以「穗智链」区块链基础平台为支撑，服务政企超 20 万家",
      },
      {
        url: img51,
        alt: "基于链上电子签重塑用户体验 — 业务诉求拆解",
        section: "需求分析",
        caption: "核心诉求：围绕文件上传完成电子签章数据上链全流程，提升签章满足度与印章开通率",
      },
      {
        url: img61,
        alt: "产品用户体验问题汇总",
        section: "用户洞察",
        caption: "用户反馈汇总 — 选择困难、操作繁琐是核心体验痛点，设计需从视觉与交互双向介入",
      },
      {
        url: img71,
        alt: "链码电子签首页核心场景设计",
        section: "核心场景",
        caption: "首页 — 精准引导用户选择业务入口，底部保留高频功能，构建丰富高效的用章体验",
      },
      {
        url: img81,
        alt: "洞察行为触发点 — 设计策略",
        section: "设计策略",
        caption: "洞察行为触发点：从签章套餐、CA 服务等兴趣点切入，优化用户签章全链路流程",
      },
      {
        url: img12,
        alt: "竞品交互借鉴 — 降低操作成本",
        section: "竞品借鉴",
        caption: "竞品分析：借鉴法大大等产品设置待签署 / 签章区域，通过引导提升签章在线完成效率",
      },
      {
        url: img91,
        alt: "放大用户触发点 — 视觉重塑",
        section: "视觉重塑",
        caption: "KR2 — 放大触发点：增加金刚区菜单栏快捷切换，预判用户操作行为，提升签章成功率",
      },
      {
        url: img101,
        alt: "AB 测试 — 回归数据探索方案最优解",
        section: "方案验证 · AB 测试",
        caption: "三套方案用户访谈对比 — 方案 A +15.2%，方案 B +17.3%，方案 C +23.6%",
      },
      {
        url: img11,
        alt: "总结方案 · 数据导向 — 方案 C 最终落地",
        caption: "方案 C：利用不规则图形交互方式解决视觉不明显问题，签章成功率相对原始对照组提升 +23.6%",
      },
      {
        url: img13,
        alt: "交互细节 — Tab 导航可直接查看",
        section: "交互细节",
        caption: "KR3 — Tab 导航直达：新版信息展示仅需 1+ 步，平均消时 0.6s；旧版需 3+ 步，平均 4.2s",
      },
      {
        url: img14,
        alt: "KR1 · 利用平铺空间强化获得率",
        section: "KR1 · 空间强化",
        caption: "KR1 — 印章中心增加印模空间，平铺展示印章样式全览，回归 UE 用户体验设计原则",
      },
      {
        url: img15,
        alt: "KR3 · 全链路提升企业电子签使用满意度",
        section: "KR3 · 全链路满意度",
        caption: "KR3 — 技术维度·交互维度·视觉维度三向并举，用户兴趣触发点：信任（内因）+ 效率 + 合规性（外因）",
      },
      {
        url: img16,
        alt: "KR2 · 放大用户触发点·提升匹配渗透率",
        section: "KR2 · 视觉重塑成果",
        caption: "KR2 成果数据 — 开章效率 +83.6%，签章成功率 +44.6%，签章满意度 6.8 → 8.2",
      },
      {
        url: img17,
        alt: "KR3 · 电子印章合规驱动授权体验升级",
        section: "KR3 · 授权体验升级",
        caption: "KR3 — 二维码授权替代线下授权，签章响应时间 +44.6%，代签效率 +193%，实现全链路可追溯",
      },
      {
        url: img18,
        alt: "KR4 · 运营收费·信息降噪",
        section: "KR4 · 运营收费降噪",
        caption: "KR4 — 独立收费小程序，功能剥离 + 收费闭环 + 合规适配，点击转化率提升 6.7%",
      },
      {
        url: img19,
        alt: "KR1 · 关注数据洞察可优化交互方案",
        section: "KR1 · 数据洞察",
        caption: "KR1 — 布局架构优化降低流量损耗，走查数据问题活化数据入口，分层推送差异化引导策略",
      },
      {
        url: img20,
        alt: "KR1 · 电子发票场景·高效开票·合规留存",
        section: "KR1 · 发票场景",
        caption: "KR1 — 重构发票模块信息架构，场景流量互通，签章场景开票发起率 +5.7%，按钮点击率 +13.7%",
      },
      {
        url: img21,
        alt: "KR2 · 关注竞品设计差异点",
        section: "KR2 · 竞品差异分析",
        caption: "KR2 — 我的界面：企业级高效签章工具，操作效率 + 合规安全；竞品：通用型，拉新与场景渗透",
      },
      {
        url: img22,
        alt: "数据结果验证·校正设计方向",
        section: "设计成果复盘",
        caption: "核心数据 — 签章发起率 +23.6%，产品 DAU +18.2%，净推荐值 NPS +11.2%，签章体验满意度 6.8 → 8.2",
      },
    ],
    horizontalStrip: [img41, img71, img16, img22, img91, img17, img13, img20, img61, img51],
  },

  {
    id: "suizhilian-portal",
    title: "穗智链 · 城市级政务区块链门户",
    titleEn: "SuiZhiLian — City-level Government Blockchain Portal",
    category: "stories",
    year: "2024—2025",
    role: "UI 设计师 / UX Design",
    duration: "持续迭代",
    tags: ["B端产品", "区块链", "政务门户", "界面设计", "可视化"],
    description:
      "基于城市级区块链平台构建可信政务门户,统一呈现区块、节点、业务接入与上链数据的综合信息,支撑 60+ 政务场景的可信服务与 1.7 亿上链数据。",
    overview:
      "穗智链是广州市统一的政务区块链平台,承载市区两级政务服务。本门户以可信数据基础支撑平台为核心,构建从城市全景、节点状况、业务上链、核心业务流程到运营数据的完整展示体系。采用 1920 像素总宽度布局,栅格系统精细化划分,容器宽 1280 像素,左右边距各 20 像素,实际显示 1240 像素,实现整体布局的居中对齐。",
    challenge:
      "如何将复杂的区块链技术语言转化为政务管理者易于理解的信息界面,同时在视觉上传达平台的可信、权威、专业气质——是门户设计的核心挑战。",
    accent: "#0a1426",
    index: "002",
    heroImage: img23,
    images: [
      {
        url: img23,
        alt: "穗智链门户首页 — 城市级政务区块链封面",
        section: "项目封面",
        caption: "数字政府可信底座 / 60+ 政务场景 / 1.7 亿链上数据,城市级政务区块链门户",
      },
      {
        url: img24,
        alt: "穗智链项目背景与设计目标",
        section: "项目背景",
        caption: "广州区块链试点收官可视化呈现优秀成绩,突出平台的国产自主可控技术与政务服务能力",
      },
      {
        url: img25,
        alt: "穗智链布局设计说明",
        section: "布局设计",
        caption: "1920 像素总宽度,栅格系统细分布局,内容容器 1280 像素,左右边距各 20 像素,实际显示 1240 像素",
      },
      {
        url: img26,
        alt: "界面展示 — 多业务终端卡片",
        section: "界面展示",
        caption: "多卡片式业务展示界面,呈现区块链底层平台、典型应用场景与可信数据支撑体系",
      },
      {
        url: img27,
        alt: "核心业务流程 — 用户访问到数据上链",
        section: "核心业务流程",
        caption: "从用户访问、信息展示、数据上链存证、应用接入申请到跨链互操作的全流程体验",
      },
      {
        url: img28,
        alt: "穗智链项目内容补充 01",
        section: "项目内容补充",
        caption: "项目内容补充展示 01",
      },
      {
        url: img29,
        alt: "穗智链项目内容补充 02",
        caption: "项目内容补充展示 02",
      },
      {
        url: img30,
        alt: "穗智链项目内容补充 03",
        caption: "项目内容补充展示 03",
      },
      {
        url: img31,
        alt: "穗智链项目内容补充 04",
        caption: "项目内容补充展示 04",
      },
      {
        url: img32,
        alt: "穗智链项目内容补充 05",
        caption: "项目内容补充展示 05",
      },
    ],
    horizontalStrip: [img23, img24, img25, img26, img27, img28, img29, img30, img31, img32],
  },

  {
    id: "zhihua-app",
    title: "植花 App · 植物科普应用设计",
    titleEn: "Plant App · Mobile UI Design",
    category: "experience",
    year: "2023",
    role: "UI 设计师 / Product Design",
    duration: "持续迭代",
    tags: ["移动端", "App 设计", "植物科普", "界面设计", "视觉规范"],
    description:
      "为用户科普各类植物、传递自然知识的移动应用界面设计,采用植物绿与轻盈玻璃质感,注入温暖活泼与视觉跃动的感受。",
    overview:
      "植花 App 以植物与花卉为核心内容,围绕首页推荐、植物百科、养护提示、商品选购等模块构建整体产品体验。字体采用 PingFang SC 与 SF Pro Text 的组合;色彩系统以植物绿(Very Peril / Muted Clay / Lotus / Dried Moss)为主基调,辅以同色系邻近色,使色彩过渡自然柔和。图标样式运用柔光质感、细节拟态化、轻玻璃质感、弥散渐变等多种视觉语言,在轻量渐变中保持统一的温暖呼吸感。",
    challenge:
      "在简洁的浅色基调下,如何在首页信息流、商品列表、植物详情页等关键场景中同时做到信息的层次感与自然的诗意氛围——是设计中的主要挑战。",
    accent: "#0d3319",
    index: "003",
    heroImage: img33,
    images: [
      {
        url: img33,
        alt: "植花 App 首页 · 植物科普应用封面",
        section: "产品介绍",
        caption: "2023.05.30 Flower Planting — 科普植物知识、温暖活泼与视觉跃动的体验",
      },
      {
        url: img34,
        alt: "设计定义 · 字体系统与视觉排版",
        section: "设计定义",
        caption: "PingFang SC / SF Pro Text 多字号字体系统,欢迎页与字号栅格标注",
      },
      {
        url: img35,
        alt: "色彩设计与图标样式",
        section: "色彩 & 图标",
        caption: "Very Peril / Muted Clay / Lotus / Dried Moss 色彩组,以及柔光玻璃质感的图标",
      },
      {
        url: img36,
        alt: "设计规范 — iOS 状态栏 / 图标 / 按钮",
        section: "设计规范",
        caption: "iOS 状态栏规范、图标规范、按钮规范的度量标注,保证各终端的统一输出",
      },
      {
        url: img37,
        alt: "首页与推荐场景界面",
        section: "界面展示",
        caption: "首页推荐流与商品入口,浅色系背景搭配植物插图,营造自然轻盈的气质",
      },
      {
        url: img38,
        alt: "首页与推荐场景界面补充",
        caption: "首页与商品模块的多状态界面展示",
      },
      {
        url: img39,
        alt: "原型设计 — 多页面线框流程",
        section: "原型设计",
        caption: "Prototype Design — 原型线框图汇总,梳理信息流与关键操作路径",
      },
    ],
    horizontalStrip: [img33, img34, img35, img36, img37, img38, img39],
  },

  {
    id: "brand-visual",
    title: "杏林院 App · 医疗健康移动端体验设计",
    titleEn: "XingLin Hospital — Medical App UX Design",
    category: "experience",
    year: "2021.12",
    role: "UI 设计师 / UX Design",
    duration: "持续迭代",
    tags: ["C 端产品", "医疗 App", "移动端", "温暖品牌", "交互设计"],
    description:
      "「杏林院」以温暖与冷色色调的自然平衡为基调，为用户提供挂号预约、医生问诊、药购药、健康科普、健康实时检测等功能，让产品充满科技感。",
    overview:
      "杏林院 App 面向大众提供一站式医疗健康服务——挂号预约、医生在线问诊、药品购买、健康科普与实时检测。产品以「在这里，医学有温度」为品牌主张，采用轻盈渐变与温暖色彩的交互设计，将复杂的医疗信息以图文、数据可视化的方式呈现给用户。字体使用 PingFang SC 与 SF Pro Text，色彩以深蓝紫、暖黄、柔粉组成多组和谐配色，图标与插画则采用圆润扁平风格，配合清新简洁的视觉语言，使整个产品在专业权威与温暖活力之间取得自然平衡。",
    challenge:
      "医疗类 App 的用户画像极其多元：中高龄用户对文字与操作路径敏感，年轻用户则希望了解更多健康科普信息。如何在同一界面中同时服务两类用户——既保证信息的清晰度与权威感，又不失产品的温度与使用的趣味性——是本次设计的核心命题。",
    accent: "#1f1730",
    index: "004",
    heroImage: s1,
    images: [
      {
        url: s1,
        alt: "杏林院 App 产品封面 · 移动端品牌展示",
        section: "产品介绍",
        caption: "2021.12.28 · 在这里，医学有温度 —— 为用户提供挂号预约、医生问诊、药购药、健康科普与实时检测的医疗应用",
      },
      {
        url: s2,
        alt: "目录 · 设计理念 / 市场分析 / 交互模型",
        section: "目录",
        caption: "项目目录概览 — 从设计理念、市场洞察、互联网医疗行业趋势到交互模型的全局说明",
      },
      {
        url: s3,
        alt: "用户画像 · 用户画像与用户研究分析",
        section: "用户研究",
        caption: "用户画像：聚焦两类典型用户（中高龄群体、年轻用户），剖析其使用路径与痛点，为后续设计决策提供依据",
      },
      {
        url: s4,
        alt: "竞品分析 · SWOT 分析与结论",
        section: "竞品分析",
        caption: "SWOT 竞品分析 — 拆解「微医 / 丁香医生 / 平安好医生」等产品，识别杏林院的优势与差异化切入点",
      },
      {
        url: s5,
        alt: "用户体验地图 · 产品设计流程与品牌感知",
        section: "体验地图",
        caption: "产品设计流程 → 用户体验地图（使用前 / 使用中 / 使用后） → 品牌感知（高效 / 变革 / 温暖 / 智能）",
      },
      {
        url: s6,
        alt: "视觉定义 · 字体 / 色彩 / 图标 / 设计规范",
        section: "视觉定义",
        caption: "PingFang SC + SF Pro Text 字体系统；深蓝紫、暖黄、柔粉等多组色板；圆润扁平风格图标与设计规范",
      },
      {
        url: s7,
        alt: "原型设计 · 首页与医疗健康服务流程",
        section: "原型设计",
        caption: "首页原型与医疗健康服务流程 — 在高保真原型中验证信息层级与主路径跳转的合理性",
      },
      {
        url: s8,
        alt: "首页、健康服务、我的、科普页面设计",
        section: "界面展示 · 主路径",
        caption: "首页信息流 · 健康服务 · 我的 · 科普 — 关键流程页面最终稿，信息密度与视觉呼吸感并轨",
      },
      {
        url: s9,
        alt: "科普社区与用户发布详情页设计",
        section: "科普社区",
        caption: "「在攀登医疗科普的路上，我们一起努力」 — 科普列表与用户发布详情，结合插画与内容卡片营造社区氛围",
      },
      {
        url: s10,
        alt: "挂号预约与医生问诊流程设计",
        section: "核心场景",
        caption: "医院挂号 · 医生问诊 · 预约流程 — 以深蓝紫为主色，突出预约与预约状态可视化，降低中老年用户的使用门槛",
      },
      {
        url: s11,
        alt: "注册登录与视频页等辅助界面设计",
        section: "辅助界面",
        caption: "注册登录 · 视频页（问诊视频） — 以全新方式丰富用户使用路径，为产品注入温暖与活力",
      },
      {
        url: s12,
        alt: "启动页、详情、404、虚拟助手与其他界面设计",
        section: "其他界面",
        caption: "启动页 · 详情页 · 404 状态页 · 虚拟助手等 — 完善产品尾部体验，确保每个角落都保持一致的品牌语言",
      },
    ],
    horizontalStrip: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12],
  },

  {
    id: "design-system",
    title: "设计系统构建",
    titleEn: "Design System Build",
    category: "experience",
    year: "2024",
    role: "Design System Lead",
    duration: "6 个月",
    tags: ["Design System", "Components", "Figma", "规范"],
    description: "从零搭建企业级设计系统，打通设计与开发协作流程。",
    overview:
      "主导一个中型 SaaS 产品的设计系统从 0 到 1 的建设。从原子级色彩、字体、间距规范开始，逐步构建组件库、模式库，最终形成覆盖 150+ 组件的完整设计系统，大幅提升团队协作效率。",
    challenge:
      "设计系统的最大挑战不在于设计本身，而在于如何让团队真正用起来。需要在灵活性与一致性之间找到精确的平衡点，并建立可持续维护的机制。",
    accent: "#1a0d0d",
    index: "005",
    heroImage: u("photo-1522542550221-31fd19575a2d", 1920),
    images: [
      { url: u("photo-1680016661694-1cd3faf31c3a", 1200), alt: "设计系统文档", section: "组件规范", caption: "组件文档与规范" },
      { url: u("photo-1561070791-36c11767b26a", 900), alt: "色彩系统", caption: "色彩 Token 体系" },
      { url: u("photo-1522542550221-31fd19575a2d", 1200), alt: "组件概览", section: "核心组件", caption: "核心组件库一览" },
    ],
    horizontalStrip: [
      u("photo-1522542550221-31fd19575a2d", 800),
      u("photo-1680016661694-1cd3faf31c3a", 800),
      u("photo-1561070791-36c11767b26a", 800),
      u("photo-1522542550221-31fd19575a2d", 800),
    ],
  },

  {
    id: "dashboard",
    title: "极简仪表板",
    titleEn: "Minimal Dashboard",
    category: "experience",
    year: "2024",
    role: "UI Designer / Prototyper",
    duration: "6 周",
    tags: ["Dashboard", "Data Viz", "Dark UI", "数据可视化"],
    description: "用极简主义原则重新诠释复杂数据仪表板，在密度与可读性间寻找平衡。",
    overview:
      "为一款工业监控 SaaS 产品重新设计数据仪表板。在保留全部数据维度的前提下，通过视觉层级的精准控制和合理的信息分组，将信息密度降低 40%，同时保留所有关键指标的可见性。",
    challenge:
      "原有界面包含 80+ 个数据指标，用户反馈「看不懂、找不到、记不住」。如何在不删减数据的前提下，重建认知秩序是本次设计的核心命题。",
    accent: "#0d1a1a",
    index: "006",
    heroImage: u("photo-1720962158813-29b66b8e23e1", 1920),
    images: [
      { url: u("photo-1720962158883-b0f2021fb51e", 900), alt: "移动端仪表板", section: "响应式", caption: "移动端响应式适配" },
      { url: u("photo-1720962158937-7ea890052166", 900), alt: "控制面板", caption: "监控控制台模块" },
      { url: u("photo-1720962158813-29b66b8e23e1", 1200), alt: "主仪表板", section: "主界面", caption: "主仪表板界面" },
    ],
    horizontalStrip: [
      u("photo-1720962158813-29b66b8e23e1", 800),
      u("photo-1720962158883-b0f2021fb51e", 800),
      u("photo-1720962158937-7ea890052166", 800),
      u("photo-1720962158813-29b66b8e23e1", 800),
    ],
  },

  {
    id: "spatial-photo",
    title: "空间摄影集",
    titleEn: "Spatial Photography",
    category: "visual",
    year: "2025",
    role: "Photographer / Art Director",
    duration: "持续创作",
    tags: ["Photography", "Layout", "排版", "空间"],
    description: "探索建筑与光线的对话关系，将摄影作品编排成具有节奏感的视觉序列。",
    overview:
      "以空间叙事为主轴，记录光线与建筑结构之间的瞬时对话。这组作品跨越两年时间，横贯多个城市，试图用影像语言捕捉那些通常被人忽略的空间诗意——光影的边界、材质的呼吸、空旷的重量。",
    challenge:
      "摄影本质上是二维的，但空间体验是三维甚至四维的（加入时间维度）。如何在静态图像中传递空间的流动感与时间性，是贯穿这个系列的核心探索。",
    accent: "#14101a",
    index: "007",
    heroImage: u("photo-1774516534097-76eb46de7229", 1920),
    images: [
      { url: u("photo-1776657215949-1b7fce8cd351", 900), alt: "庭院", section: "No.1", caption: "庭院 — 枯石与草" },
      { url: u("photo-1681684563211-7fb10143157a", 900), alt: "空室", section: "No.2", caption: "空室 — 余光与木纹" },
      { url: u("photo-1774516534097-76eb46de7229", 1200), alt: "混凝土空间", section: "No.3", caption: "混凝土·窗·光" },
    ],
    horizontalStrip: [
      u("photo-1774516534097-76eb46de7229", 800),
      u("photo-1776657215949-1b7fce8cd351", 800),
      u("photo-1681684563211-7fb10143157a", 800),
      u("photo-1774516534097-76eb46de7229", 800),
    ],
  },

  {
    id: "type-lab",
    title: "广州市政务区块链基础平台 V2.0 · 数据可视化大屏",
    titleEn: "GZ Gov Blockchain Platform V2.0 — Data Visualization Dashboard",
    category: "experience",
    year: "2025",
    role: "UI 设计师 / 数据可视化",
    duration: "持续迭代",
    tags: ["数据可视化", "政务平台", "大屏设计", "B 端产品", "区块链"],
    description:
      "为广州市政务区块链管理平台（穗智链 2.0）设计全域可视化运营大屏，整合节点监控、业务上链、以旧换新、医疗互认等多场景数据。",
    overview:
      "广州市政务区块链管理平台（又称「穗智链」）是广州市数字政府建设的核心可信基础设施，依托区块链技术构建全市统一的政务数据可信流通底座。平台已建成 82 条业务链、52 个节点，覆盖市、区、街道三级，接入 102 个主管部门、12.3 万家单位与 18 万+ 政务应用。本次可视化大屏设计以「业务上链可追溯、跨部门可信协同、全链路可视化运营管控」为目标，呈现全域总览、部门管控、场景专题、运维保障四大核心能力，助力城市治理数字化升级。",
    challenge:
      "政务可视化大屏设计面临双重挑战：一方面要在单屏中承载海量指标（存证次数、业务数据量、节点状态、区块链运行数据等），让信息层级清晰、阅读路径自然；另一方面必须在视觉语言上兼顾权威感与科技感，以 2D 简化地图 + 分层点位的方式呈现动态点位信息，满足低开发与低运维成本的平衡。",
    accent: "#0a1530",
    index: "008",
    heroImage: dt1,
    images: [
      {
        url: dt1,
        alt: "项目封面 · 广州市政务区块链基础平台 V2.0",
        section: "项目封面",
        caption: "广州市政务区块链基础平台 V2.0 — 全域总览大屏封面，以广州行政区划地图为视觉中心，叠加业务数据与节点指标",
      },
      {
        url: dt2,
        alt: "项目介绍 · 穗智链平台定位与核心指标",
        section: "项目背景",
        caption: "穗智链平台定位：面向全市政务部门提供业务上链、数据存证、跨部门可信协同与全链路可视化运营管控能力",
      },
      {
        url: dt3,
        alt: "平台信息汇总思维导图 · 首页线框原型",
        section: "信息架构",
        caption: "六大模块思维导图：平台基础定位、核心运行指标、核心功能架构、重点业务场景、运维监控体系、项目建设价值；并制定线框原型",
      },
      {
        url: dt4,
        alt: "地图与点位设计 · 广州行政区划",
        section: "地图设计",
        caption: "采用 2D 简化地图 + 双层点位（地图点位 / 信息点位）呈现，兼顾动态信息承载与视觉干扰成本",
      },
      {
        url: dt5,
        alt: "框架设计 · 顶部导航、大标题、层级按钮、弹窗与列表",
        section: "框架设计",
        caption: "搭建从顶部导航栏、层级按钮、大标题、内容标题、弹窗到列表的完整组件框架，统一视觉语言",
      },
      {
        url: dt6,
        alt: "地图展示页面 · 全域总览与区块链运行数据",
        section: "地图展示",
        caption: "地图总览页：整合整体运行情况、区块链运行数据、节点总数、业务数据监控分析、业务存证排行等",
      },
      {
        url: dt7,
        alt: "业务单位数据页面 · 市级部门指标",
        section: "业务单位数据",
        caption: "呈现各业务单位（商务局、卫健委、税务局等）的上链数量、业务量、接入单位等指标，支持按单位快速定位",
      },
      {
        url: dt8,
        alt: "以旧换新页面与医疗互认页面",
        section: "重点业务场景",
        caption: "以旧换新场景与医疗互认场景 — 展示业务场景维度的跨部门可信协同数据与效果评估",
      },
      {
        url: dt9,
        alt: "区块链节点监控 · 服务器资源监控",
        section: "运维监控",
        caption: "节点矩阵监控与服务器资源监控 — 为运维团队提供节点级与机器级的实时状态与预警信息",
      },
      {
        url: dt10,
        alt: "项目总结 · 感谢观看",
        section: "项目总结",
        caption: "项目收束页 — 展示穗智链平台的数据可视化成果，感谢用户的关注与使用",
      },
    ],
    horizontalStrip: [dt1, dt2, dt3, dt4, dt5, dt6, dt7, dt8, dt9, dt10],
  },
];

export const CATEGORIES = [
  { key: "all" as const,        zh: "全部",         en: "ALL" },
  { key: "stories" as const,    zh: "近阶段项目故事", en: "PROJECT STORIES" },
  { key: "experience" as const, zh: "体验思考",      en: "UX THINKING" },
  { key: "visual" as const,     zh: "视觉探索",      en: "VISUAL EXPLORATIONS" },
];

export type Category = "all" | "stories" | "experience" | "visual";
