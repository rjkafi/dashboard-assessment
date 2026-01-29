import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { getIconUrl } from "../utils";

export default function ProfileSeletion() {
  const [profileData, setProfileData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York",
  });

  return (
    <div className="min-h-screen text-white">
      {/* Tabs button */}
      <div className="flex gap-10 text-lg mb-10">
        <NavLink
          to="/settings/profile"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 pb-1" : ""
          }
        >
          <button className="text-white font-medium ">Profile</button>
        </NavLink>
        <button className="text-gray-400 hover:text-white">
          Password Settings
        </button>
      </div>

      {/* PROFILE TAB_Button */}
      <div className="max-w-5xl">
        {/* Profile Image */}
        <p className="text-xl mb-4">Profile Image</p>

        <div className="flex items-end gap-5 mb-12">
          <div className="relative">
            <img
              src={getIconUrl("avatar.png")}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 text-2xl -right-1 bg-[#7AA3CC] p-2.5 rounded-lg">
              <FiEdit />
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-8">
          <Input
            label="Full Name"
            name="fullName"
            value={profileData.fullName}
          />
          <Input label="Email" name="email" value={profileData.email} />
          <Input
            label="Store Name"
            name="storeName"
            value={profileData.storeName}
          />
          <Input
            label="Store Address"
            name="storeAddress"
            value={profileData.storeAddress}
          />
        </div>

        {/* Save Button */}
        <div className="mt-12 md:py-4 py-2 text-center rounded-2xl hover:text-[#00C950] hover:bg-white transition bg-[#00C950] mx-auto max-w-92.5">
          <button className=" text-xl md:text-2xl font-bold ">Save</button>
        </div>
      </div>
    </div>
  );
}

/* Inputs  is Here */

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-lg">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full px-5 py-4 rounded-2xl
          bg-[#0A0A0F]/50
          border border-[#00FF88]/20
          focus:border-green-500
          outline-none
          text-white
        "
      />
    </div>
  );
}
