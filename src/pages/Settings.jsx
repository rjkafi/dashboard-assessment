import React from "react";
import { NavLink } from "react-router-dom";
import ProfileRow from "../components/ProfileInput";
import { getIconUrl } from "../utils";

export default function Settings() {
  return (
    <>
      <div className=" text-white min-h-screen">
        {/* Tabs button */}
        <div className="flex gap-10 text-lg mb-10 ">
          <NavLink
            to="/settings/profile"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-500 pb-1" : ""
            }
          >
            <button className="text-white font-medium cursor-pointer">
              Profile
            </button>
          </NavLink>
          <button className="text-gray-400 hover:text-white">
            Password Settings
          </button>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          {/* Profile Image */}
          <p className="text-xl text-white mb-4">Profile Image</p>

          <div className="flex items-end gap-4 mb-10">
            <img
              src={getIconUrl("avatar.png")}
              alt="profile"
              className="w-25.5 h-25.5 rounded-full object-cover"
            />
            <NavLink to="/settings/profile">
              <button
                className="
               flex items-center gap-x-2 px-4 py-2 rounded-2xl transition-all duration-300
             text-white
               bg-linear-to-b
               from-[#152252]
               to-[#111B3C]
               cursor-pointer
               shadow-[0_3.71px_4.85px_#57B1FF27,0_10.27px_13.4px_#57B1FF38,0_24.72px_32.26px_#57B1FF30,0_42px_107px_#57B1FF57,inset_0_1px_4px_2px_#D2EAFF,inset_0_1px_18px_2px_#D2EAFF]
               brightness-90
           "
              >
                Edit Profile
              </button>
            </NavLink>
          </div>

          {/* Info Rows */}
          <div className="space-y-5">
            <ProfileRow label="Full Name" value="Jane D." />
            <ProfileRow label="Email" value="jane@gmail.com" />
            <ProfileRow label="Store Name" value="Ubreakfix Store" />
            <ProfileRow
              label="Store Address"
              value="123 Main Street, New York, NY 10001"
            />
          </div>
        </div>
      </div>
    </>
  );
}
