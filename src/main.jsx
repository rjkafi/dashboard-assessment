import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileSeletion from "./components/ProfileSeletion.jsx";
import "./index.css";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Appointments from "./pages/Appointments.jsx";
import CallLogs from "./pages/CallLogs.jsx";
import Overview from "./pages/Overview.jsx";
import Settings from "./pages/Settings.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/call-logs",
        element: <CallLogs />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/profile",
        element: <ProfileSeletion />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
