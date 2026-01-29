import { GoClock } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { getIconUrl } from "../utils";

export default function CallList() {
  const calls = [
    {
      id: 1,
      status: "AI_RESOLVED",
      actionText: "Quote Provided",
      issue: "Screen",
      duration: "05:23",
    },
    {
      id: 2,
      status: "WARM_TRANSFER",
      actionText: "Escalated to technician",
      issue: "Software",
      duration: "05:23",
    },
    {
      id: 3,
      status: "APPOINTMENT",
      actionText: "Appointment Booked",
      issue: "Battery",
      duration: "05:23",
    },
    {
      id: 4,
      status: "DROPPED",
      actionText: "Call Dropped",
      issue: "Unknown",
      duration: "00:20",
    },
    {
      id: 5,
      status: "AI_RESOLVED",
      actionText: "Quote Provided",
      issue: "Screen",
      duration: "05:23",
    },
  ];

  const statusMap = {
    AI_RESOLVED: {
      label: "AI Resolved",
      className:
        "border-[#00C950]/30 text-[#05DF72] bg-linear-to-t from-[#00BC7D]/20 to-[#00C950]/20",
    },
    WARM_TRANSFER: {
      label: "Warm Transfer",
      className:
        "border-[#FF9F1C]/30 text-[#FF9F1C] bg-linear-to-t from-[#FF9F1C]/20 to-[#FF9F1C]/10",
    },
    APPOINTMENT: {
      label: "Appointment",
      className:
        "border-[#2B7FFF]/30 text-[#52A2FF] bg-linear-to-t from-[#2B7FFF]/20 to-[#2B7FFF]/10",
    },
    DROPPED: {
      label: "Dropped",
      className:
        "border-[#FF3B3B]/30 text-[#FF3B3B] bg-linear-to-t from-[#FF3B3B]/20 to-[#FF3B3B]/10",
    },
  };

  return (
    <div className="w-full max-w-138 h-auto lg:h-160 bg-[#0F1A3A] border border-[#1E2A5A] rounded-2xl text-white">
      <h3 className="p-4 text-xl">Call List</h3>

      {calls.map((call, index) => (
        <div
          key={call.id}
          className={`rounded-xl cursor-pointer ${
            index === 0 ? "" : "hover:bg-[#14235A]"
          }`}
        >
          <hr className="w-full border-t border-[#2B7FFF]/20" />

          <div className="flex gap-4 p-4">
            <div className="w-10 h-10 bg-linear-to-t from-[#00B8DB] to-[#2B7FFF] rounded-xl flex items-center justify-center text-xs">
              <img
                className="w-4.5 h-4.5"
                src={getIconUrl("call.png")}
                alt="Call Icon"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="font-normal text-[16px]">+1 (555) 345-6789</p>

                <span
                  className={`text-xs leading-4 border px-2 py-1 rounded-xl ${
                    statusMap[call.status].className
                  }`}
                >
                  {statusMap[call.status].label}
                </span>
              </div>

              <p className="text-xs text-[#90A1B9] mt-1">
                2025-12-16 • 09:42 AM
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-2.5 px-4 text-[14px]">
            <p className="flex items-center gap-1.5 text-[#90A1B9] leading-5">
              <GoClock className="w-4 h-5" />
              {call.duration}
            </p>
            <p className="flex items-center gap-1.5 text-[#90A1B9] leading-5">
              <IoMdCheckmarkCircleOutline className="w-4 h-5" />{" "}
              {call.actionText}
            </p>
            <span className="bg-[#2B7FFF]/20 px-2 text-[#52A2FF] py-0.5 rounded">
              {call.issue}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
