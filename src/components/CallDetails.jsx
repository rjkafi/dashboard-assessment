import { getIconUrl } from "../utils";

export default function CallDetails() {
  return (
    <div
      className="
          w-full
          max-w-145
          h-auto
          lg:h-215
          bg-[#0F1A3A]
          border border-[#1E2A5A]
          rounded-2xl
          text-white
        "
    >
      <h3 className=" p-4 text-xl">Call Details</h3>
      <hr className="w-full border-t border-[#2B7FFF]/20" />
      <div className="p-6">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4  text-sm mb-6">
          <div>
            <p className="text-[#90A1B9] mb-1 text-[14px] leading-5">
              Phone Number
            </p>
            <p className="text-[16px] leading-6">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-[#90A1B9] mb-1 text-[14px] leading-5">
              Duration
            </p>
            <p className="text-[16px] leading-6">4:32</p>
          </div>
          <div>
            <p className="text-[#90A1B9] mb-1 text-[14px] leading-5">
              Date & Time
            </p>
            <p className="text-[16px] leading-6">2025-12-16 10:45 AM</p>
          </div>
          <div>
            <p className="text-[#90A1B9] mb-1 text-[14px] leading-5">
              Issue Type
            </p>
            <p className="text-[16px] leading-6">Screen</p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-6">
          <p className="text-[#90A1B9] mb-1.5 text-[14px] leading-5">
            Call Type
          </p>
          <span className="text-xs leading-4 border px-2 py-1 rounded-xl border-[#00C950]/30 text-[#05DF72] bg-linear-to-t from-[#00BC7D]/20 to-[#00C950]/20">
            AI Resolved
          </span>
        </div>
        {/* Outcome */}
        <div className="mb-6">
          <p className="text-[#90A1B9] mb-1 text-[14px] leading-5">Outcome</p>
          <p className="text-[16px] leading-6">Quote provided</p>
        </div>

        {/* Audio Button */}
        <div className="w-full flex items-center justify-center gap-2 border border-[#AD46FF]/30 text-[#C27AFF] leading-6 text-[16px] pt-2.5 pb-3.5 md:pt-3 md:pb-4 mb-6 bg-linear-to-r from-[#AD46FF]/20 to-[#F6339A]/20 rounded-xl">
          <img
            className="w-5 h-5"
            src={getIconUrl("play.png")}
            alt="Play Icon"
          />
          <span>Play Audio Recording</span>
        </div>

        {/* Transcript */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={getIconUrl("transcript.png")}
            alt="transcript icon"
            className="w-5 h-5"
          />
          <h3 className="leading-6 text-[16px]">Conversation Transcript</h3>
        </div>

        <div className="bg-[#1D293D]/50 rounded-xl p-4 text-sm space-y-3">
          <div>
            <p className="text-green-400 mb-1 font-medium">AI Assistant:</p>
            <p>Thank you for calling uBreakiFix! How can I help you today?</p>
          </div>
          <div>
            <p className="text-blue-400 font-medium">Customer:</p>
            <p>Hi, my iPhone 13 screen is cracked. How much would it cost?</p>
          </div>
          <div>
            <p className="text-green-400 mb-1 font-medium">AI Assistant:</p>
            <p>
              I can help you with that! For an iPhone 13 screen repair, our
              price is $199. This includes parts, labor, and comes with a 90-day
              warranty. Would you like to book an appointment?
            </p>
          </div>
          <div>
            <p className="text-blue-400 font-medium">Customer:</p>
            <p>Yes, please! When are you available?</p>
          </div>
          <div>
            <p className="text-green-400 mb-1 font-medium">AI Assistant:</p>
            <p>
              Great! I have availability today at 2:00 PM or tomorrow at 10:00
              AM. Which works better for you?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
