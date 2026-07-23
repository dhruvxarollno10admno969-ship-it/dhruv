import React, { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Search Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white transition duration-300 hover:text-orange-500 hover:scale-110"
      >
        <Search size={24} />
      </button>

      {/* Popup */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 backdrop-blur-sm pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-2xl rounded-2xl bg-white p-6 shadow-2xl animate-[fadeIn_.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-red-500 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Search Box */}
            <div className="flex overflow-hidden rounded-xl border-2 border-orange-500">
              <input
                type="text"
                placeholder="Search Naruto Characters..."
                className="w-full px-5 py-4 text-lg text-black outline-none"
              />

              <button className="bg-orange-500 px-6 text-white transition hover:bg-orange-600">
                <Search size={22} />
              </button>
            </div>

            {/* Suggestions */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-gray-500">
                Popular Searches
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Naruto",
                  "Sasuke",
                  "Itachi",
                  "Kakashi",
                  "Madara",
                  "Minato",
                  "Pain",
                  "Obito",
                ].map((item) => (
                  <button
                    key={item}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-500 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
