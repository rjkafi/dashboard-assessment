function App() {
  return (
    <>
      <div className="flex ">
        <div className="w-60 min-h-screen bg-[#111B3C] flex flex-col justify-between text-white p-4">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center text-black font-bold">
              ⚡
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1">
            <ul className="space-y-7">
              <li className="flex items-center  p-2 hover:bg-[#1B1F52] rounded cursor-pointer">
                {/* ICON  /> */}
                <span className=" font-medium">Dashboard Overview</span>
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

        <div className="border-4  w-full border-amber-300  ">header</div>
      </div>
    </>
  );
}

export default App;
