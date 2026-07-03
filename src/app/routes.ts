import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";

// 支持部署到 GitHub Pages 子路径（例如 /<repo-name>/）时，
// 自动读取当前页面的基础路径作为 basename，
// 这样在 https://bopaul552.github.io/<repo-name>/ 时，路由能正确匹配
const basename = import.meta.env.BASE_URL || "/";

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
  { basename }
);
