import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routeTitles = {
    "/": "Dashboard Overview",
    "/call-logs": "Call Logs & History",
    "/appointments": "Appointments",
    "/settings": "Settings",
  };
  const pageTitle = routeTitles[location.pathname] || "Dashboard";
  return (
    <div className="flex font-inter h-screen bg-[#0F1F45] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="sticky top-0 z-40">
          <Header onMenuClick={() => setIsOpen(true)} title={pageTitle} />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
