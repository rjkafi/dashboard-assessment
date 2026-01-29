import CallTrendsChart from "./components/CallTrendsChart";
import RecentActivity from "./components/RecentActivity";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import TopRepairRequests from "./components/TopRepairRequests";
import { getIconUrl } from "./utils";

function App() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar/>
        <div className="border-4  w-full border-amber-300  ">
          {/* header */}
          <div className="flex bg-[#111B3C]  text-white justify-between items-center py-2 px-4.5">
            <div>
              <h4 className=" text-[32px]">Dashboard Overview</h4>
            </div>
            <div className="flex gap-10 items-center">
              <img className="w-8 h-8" src={getIconUrl("notifications_none.png")} alt="Notifications" />
              <img className="md:w-20 md:h-20 w-14 h-14 overflow-hidden" src={getIconUrl("avatar.png")} alt="Avatar" />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~Outlet ~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div
            className="p-6 space-y-6 bg-[#0F1F45]"
          >
            {/* Stats Section */}
            <Stats />
            {/* Call Trends Chart */}
            <CallTrendsChart/>
            {/* RecentActivity & TopRepairRequests section */}
            <div
              className="
              flex
              flex-col
              gap-4
              items-center
              lg:flex-row
              lg:items-start
              

      "
            >
              <RecentActivity />
              <TopRepairRequests />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
