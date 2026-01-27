import RecentActivity from "./components/RecentActivity";
import Stats from "./components/Stats";
import TopRepairRequests from "./components/TopRepairRequests";

function App() {
  return (
    <>
      <div className="flex bg-[#111B3C] ">
        <div className="w-60 min-h-screen  flex flex-col justify-between text-white p-4">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center text-black font-bold">
              ⚡
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1">
            <ul className="space-y-7">
              <li className="relative w-56 h-10 rounded-xl p-px bg-linear-to-b from-[rgba(0,136,255,0.3)] to-[rgba(119,192,255,0.3)]">
                {/* Inner item */}
                <div
                  className="
        flex items-center gap-4
        h-full w-full
        rounded-[11px]
        px-2 py-1
        text-white font-medium
        cursor-pointer
        shadow-[0_3.71px_4.85px_#57B1FF27,0_10.27px_13.4px_#57B1FF38,0_24.72px_32.26px_#57B1FF30,0_42px_107px_#57B1FF57,inset_0_1px_4px_2px_#D2EAFF,inset_0_1px_18px_2px_#D2EAFF]
        hover:brightness-110
      "
                >
                  {/* ICON */}
                  {/* <span className="text-lg">Over view Icon</span> */}

                  {/* Text */}
                  <span>Dashboard Overview</span>
                </div>
              </li>
              <li className="flex items-center  p-2 hover:bg-[#1B1F52] rounded cursor-pointer">
                {/* ICON /> */}
                <span className=" font-medium">Dashboard Overview</span>
              </li>
              <li className="flex items-center  p-2 hover:bg-[#1B1F52] rounded cursor-pointer">
                {/* ICON t /> */}
                <span className=" font-medium">Dashboard Overview</span>
              </li>
              <li className="flex items-center  p-2 hover:bg-[#1B1F52] rounded cursor-pointer">
                {/* ICON  /> */}
                <span className=" font-medium">Dashboard Overview</span>
              </li>
            </ul>
          </nav>

          {/* Logout button */}
          <button className="flex items-center space-x-2 p-2 hover:bg-red-600 rounded cursor-pointer text-red-500">
            {/* Arrow Icon /> */}
            <span>Log Out</span>
          </button>
        </div>

        <div className="border-4  w-full border-amber-300  ">
          {/* header */}
          <div className="flex text-white justify-between items-center py-2">
            <div>
              <h4 className="pl-6">Dashboard Overview</h4>
            </div>
            <div className="pr-4.5">USERIcon</div>
          </div>
          {/* outlet */}
          <div
            className="px-2"
            style={{ backgroundColor: "rgba(43, 127, 255, 0.2)" }}
          >
            {/* Stats Section */}
            <Stats />
            {/* RecentActivity & TopRepairRequests section */}
            <div
              className="
        flex flex-col
        lg:flex-row
        xl:flex-row
        gap-6
        items-center xl:items-start
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
