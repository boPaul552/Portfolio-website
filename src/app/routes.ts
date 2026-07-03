import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";

// 自动推断 GitHub Pages 子路径的 basename。
// 读取 window.location.pathname 最顶层目录（如 /Portfolio-website/），
// 这样无论你把仓库改名叫什么，部署后路由都能正确匹配。
function detectBasename() {
  if (typeof window === "undefined") return "/";
  const parts = window.location.pathname.split("/").filter(Boolean);
  // 在仓库根路径下，basename 就是第一个目录段（例如 /Portfolio-website）
  if (parts.length === 0) return "/";
  // 可能直接访问子路由（/Portfolio-website/project/xxx），
  // 取第一个目录段作为 basename。
  return "/" + parts[0];
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "project/:id", Component: ProjectDetail },
      ],
    },
  ],
  { basename: detectBasename() }
);

