import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const filterData = {
  "IDEAL FOR": ["Men", "Women", "Kids"],
  "OCCASION": ["Casual", "Party", "Wedding"],
  "WORK": ["Embroidered", "Printed", "Solid"],
  "FABRIC": ["Cotton", "Silk", "Linen"],
  "SEGMENT": ["Premium", "Value", "Luxury"],
  "SUITABLE FOR": ["Summer", "Winter", "All Seasons"],
  "RAW MATERIALS": ["Organic", "Synthetic"],
  "PATTERN": ["Striped", "Checked", "Plain"]
};

const FilterSidebar = () => {
  const [customizable, setCustomizable] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-64 px-4 py-2 space-y-4 text-sm">
      {/* Customizable Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="customizable"
          checked={customizable}
          onChange={() => setCustomizable(!customizable)}
          className="w-4 h-4"
        />
        <label htmlFor="customizable" className="text-xs font-medium">
          CUSTOMIZABLE
        </label>
      </div>

      {/* Filters */}
      {Object.entries(filterData).map(([title, items]) => (
        <div key={title}>
          {/* Dropdown Title */}
          <div
            className="flex justify-between items-center cursor-pointer py-2 font-semibold"
            onClick={() => toggleSection(title)}
          >
            <span className="text-xs">{title}</span>
            {openSections[title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {/* Dropdown Items */}
          {openSections[title] && (
            <div className="pl-1 text-xs text-black space-y-1 font-semibold">
              {items.map((item) => (
                <div key={item} className="cursor-pointer hover:text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
