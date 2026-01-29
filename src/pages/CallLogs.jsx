import React from "react";
import CallDetails from "../components/CallDetails";
import CallList from "../components/CallList";

export default function CallLogs() {
  return (
    <>
      <div className="flex flex-wrap md:justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="flex-1 max-w-137.5 bg-[#0F172B]/50 border border-[#2B7FFF]/20 text-[#62748E] px-4 py-2 rounded-xl outline-none"
        />

        <select className="bg-[#111B3D] text-white border border-[#2B7FFF]/20 px-4 py-2 rounded-lg">
          <option>All Type</option>
        </select>

        <select className="bg-[#111B3D] text-white border border-[#2B7FFF]/20 px-4 py-2 rounded-lg">
          <option>All Issues</option>
        </select>

        <select className="bg-[#111B3D] text-white border border-[#2B7FFF]/20 px-4 py-2 rounded-lg">
          <option>Today</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CallList />
        <CallDetails />
      </div>
    </>
  );
}
