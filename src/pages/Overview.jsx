import React from "react";
import CallTrendsChart from "../components/CallTrendsChart";
import RecentActivity from "../components/RecentActivity";
import Stats from "../components/Stats";
import TopRepairRequests from "../components/TopRepairRequests";

export default function Overview() {
  return (
    <>
      {/* Stats Section */}
      <Stats />
      {/* Call Trends Chart */}
      <CallTrendsChart />
      {/* RecentActivity & TopRepairRequests section */}
      <div className="flex flex-col gap-4 items-center lg:flex-row lg:items-start">
        <RecentActivity />
        <TopRepairRequests />
      </div>
    </>
  );
}
