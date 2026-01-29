import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen bg-[#0F1F45] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="sticky top-0 z-40">
          <Header onMenuClick={() => setIsOpen(true)} />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
