import React from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { getIconUrl } from "../utils";

export default function Sidebar({ isOpen, setIsOpen }) {
  const navItemClass = ({ isActive }) =>
    `
    flex items-center gap-x-1.5 px-2 py-3 rounded-2xl transition-all duration-300
    ${
      isActive
        ? `
          text-white
          bg-gradient-to-b
          from-[#152252]
          to-[#111B3C]
          shadow-[0_3.71px_4.85px_#57B1FF27,0_10.27px_13.4px_#57B1FF38,0_24.72px_32.26px_#57B1FF30,0_42px_107px_#57B1FF57,inset_0_1px_4px_2px_#D2EAFF,inset_0_1px_18px_2px_#D2EAFF]
          brightness-90
        `
        : "text-gray-400 hover:brightness-110"
    }
  `;

  const renderSideLinks = () => (
    <>
      <li>
        <NavLink to="/" className={navItemClass}>
          <img
            className="w-6 h-6"
            src={getIconUrl("home.png")}
            alt="overview"
          />
          <span>Dashboard Overview</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/call-logs" className={navItemClass}>
          <img
            className="w-6 h-6"
            src={getIconUrl("call.png")}
            alt="call logs"
          />
          <span>Call Logs</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/appointments" className={navItemClass}>
          <img
            className="w-6 h-6"
            src={getIconUrl("appointments.png")}
            alt="appointments"
          />
          <span>Appointments</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/settings" className={navItemClass}>
          <img
            className="w-6 h-6"
            src={getIconUrl("settings.png")}
            alt="settings"
          />
          <span>Settings</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/*  Mobile Drawer for small device */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="fixed left-0 top-0 h-full w-64 bg-[#111B3C] p-4 text-white">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              {/*  Close icon  */}
              <IoMdClose />
            </button>

            <div className="my-6 flex justify-center">
              <div className="w-14 h-14 bg-linear-to-t from-[#00D4FF] to-[#00FF88] rounded-xl flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src={getIconUrl("logo.png")}
                  alt="logo"
                />
              </div>
            </div>

            <ul className="space-y-4">{renderSideLinks()}</ul>
          </div>
        </div>
      )}

      {/* Sidebar for Desktop/large device */}
      <aside className="hidden lg:flex w-60 flex-col justify-between bg-[#111B3C] px-3 text-white">
        {/* Logo */}
        <div className="mt-9 flex justify-center">
          <div className="w-14 h-14 bg-linear-to-t from-[#00D4FF] to-[#00FF88] rounded-xl flex items-center justify-center">
            <img className="w-6 h-6" src={getIconUrl("logo.png")} alt="logo" />
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-16 flex-1">
          <ul className="space-y-6">{renderSideLinks()}</ul>
        </nav>

        {/* Logout */}
        <div className="mb-6 flex items-center gap-2 p-3 rounded-xl cursor-pointer text-red-500 hover:bg-red-500 hover:text-white transition">
          <img
            className="w-6 h-6"
            src={getIconUrl("arrow-right.png")}
            alt="logout"
          />
          <span className="font-medium">Log Out</span>
        </div>
      </aside>
    </div>
  );
}
