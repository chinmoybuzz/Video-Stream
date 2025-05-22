import { createRoot } from "react-dom/client";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./appLayout/AppLayout";
import AdminLayout from "./appLayout/AdminLayout";
import AdminAuthWrapper from "./components/auth/AdminAuthWrapper";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import Video from "./pages/admin/video/Video";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

/// Routes

const VideoPage = lazy(() => import("./pages/Video"));
const TrendingPage = lazy(() => import("./pages/Trending"));
const ProfilePage = lazy(() => import("./pages/Profile"));
///Routes end

// with suspense and fallback

const withSuspense = (Component) => (
  <Suspense fallback={<h1>Loading.....</h1>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video",
        element: withSuspense(VideoPage),
      },
      {
        path: "/trending",
        element: withSuspense(TrendingPage),
      },
      {
        path: "/profile",
        element: withSuspense(ProfilePage),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminAuthWrapper />,
    children: [
      {
        path: "login",
        element: <h1>Admin Login Page</h1>,
      },
      {
        path: "",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to={"dashboard"} replace /> },
          {
            path: "dashboard",
            element: <h1>Dashboard</h1>,
          },
          {
            path: "users",
            element: <h1>Uses List</h1>,
          },
          {
            path: "videos",
            element: <Video />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
