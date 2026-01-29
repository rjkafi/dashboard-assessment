import { FiCopy } from "react-icons/fi";

const BookingLink = () => {
  return (
    <div className="bg-linear-to-tr from-[#16213E] to-[#1A1A2E] border border-blue-900 rounded-xl p-4 md:p-6">
      <p className="text-xl leading-6 text-white mb-2 md:mb-4">Booking Link</p>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          readOnly
          value="https://techstore.com/book?id=store123"
          className="flex-1 truncate bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-2xl px-4 py-3.5 text-sm outline-none"
        />

        <button
          className="
          flex items-center justify-center text-center gap-x-2 px-4 py-3 rounded-2xl transition-all duration-300
        text-white
          bg-linear-to-b
          from-[#152252]
          to-[#111B3C]
          shadow-[0_3.71px_4.85px_#57B1FF27,0_10.27px_13.4px_#57B1FF38,0_24.72px_32.26px_#57B1FF30,0_42px_107px_#57B1FF57,inset_0_1px_4px_2px_#D2EAFF,inset_0_1px_18px_2px_#D2EAFF]
          brightness-90
      "
        >
          <FiCopy className="text-lg" />
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default BookingLink;
