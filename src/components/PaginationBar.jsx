import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PaginationBar() {
  return (
    <>
      <div className="flex flex-wrap  mx-auto items-center justify-center gap-2 text-sm text-blue-400 mt-6">
        {/* Previous */}
        <button className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-400 hover:text-blue-400 disabled:opacity-40">
          <FiChevronLeft />
          Previous
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className="px-3 py-2 rounded-md transition">
            {page}
          </button>
        ))}

        <span className="px-2 text-gray-400">...</span>

        <button className="px-3 py-2 rounded-md hover:bg-blue-500/10"></button>

        {/* Next button */}
        <button className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-400 hover:text-blue-400 disabled:opacity-40">
          Next
          <FiChevronRight />
        </button>
      </div>
    </>
  );
}
