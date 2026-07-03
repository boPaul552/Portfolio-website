import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "project/:id", Component: ProjectDetail },
    ],
  },
]);
