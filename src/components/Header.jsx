import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { getIconUrl } from "../utils";

export default function Header({ onMenuClick }) {
  return (
    <>
      {/* header */}
      <div className="flex bg-[#111B3C]  text-white justify-between items-center py-2 px-4.5">
        {/*  Menu for small device */}
        <div className="lg:hidden p-4">
          <button onClick={onMenuClick} className="text-white text-xl">
            {/* Menubar icon  */}
            <IoMenuOutline />
          </button>
        </div>
        <div>
          <h4 className="text-sm md:text-[32px]">Dashboard Overview</h4>
        </div>
        <div className="flex gap-10 items-center">
          <img
            className="w-8 h-8"
            src={getIconUrl("notifications_none.png")}
            alt="Notifications"
          />
          <img
            className="md:w-20 md:h-20 w-14 h-14 overflow-hidden"
            src={getIconUrl("avatar.png")}
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}
