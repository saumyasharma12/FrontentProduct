import React, { useState } from "react";
import { ChevronDown, ChevronLeft, Check } from "lucide-react";

const SortSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className="flex justify-between items-center border-t border-gray-300 py-4 px-4 md:px-10 relative">
      {/* Left side: Items + Filter */}
      <div className="flex items-center gap-6">
        <div className="text-xs font-semibold tracking-wide">3425 ITEMS</div>
        <div className="flex items-center text-xs text-gray-500 cursor-pointer">
          <ChevronLeft size={14} />
          <span className="underline ml-1">HIDE FILTER</span>
        </div>
      </div>

      {/* Right side: Dropdown */}
      <div className="relative text-xs font-semibold cursor-pointer select-none">
        <div
          className="flex items-center gap-1 border px-3 py-1.5 rounded-md hover:shadow-sm transition"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selected}
          <ChevronDown size={14} />
        </div>

        {/* Dropdown List */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 text-end bg-white border border-gray-200 rounded-md shadow-lg z-10 animate-fade-in">
            {options.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 text-xs flex items-center gap-2 hover:bg-gray-100 transition cursor-pointer ${
                  option === selected ? "text-black font-semibold" : "text-gray-700"
                }`}
                onClick={() => {
                  setSelected(option);
                  setShowDropdown(false);
                }}
              >
                {option === selected && <Check size={14} className="text-black text-end" />}
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortSection;
