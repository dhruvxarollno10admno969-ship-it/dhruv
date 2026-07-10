import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Search Icon */}
      <button
        onClick={() => setOpen(true)}
        className="text-white hover:text-orange-400 transition"
      >
        <Search size={26} />
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-24 z-50">
          <div className="bg-white w-[90%] max-w-xl rounded-xl shadow-2xl p-5 relative animate-fade">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>

            {/* Search Input */}
            <div className="flex items-center border-2 border-orange-500 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 outline-none text-black"
              />

              <button className="bg-orange-500 px-5 py-3 text-white hover:bg-orange-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPopup;
