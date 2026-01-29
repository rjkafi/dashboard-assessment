import React from "react";

export default function ProfileRow({ label, value }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-3 py-5 border-b border-blue-900/60">
        <p className="w-40 font-medium text-xl text-gray-300">{label}:</p>
        <p className="text-white text-xl">{value}</p>
      </div>
    </>
  );
}
