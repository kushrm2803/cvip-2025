'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GroupFilter = ({ groups, selectedGroup, setSelectedGroup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (group) => {
    setSelectedGroup(group);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8">
      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center space-x-4">
        {groups.map((group) => (
          <motion.button
            key={group}
            className={`px-6 py-2 rounded-lg text-white ${
              selectedGroup === group ? "bg-red-500" : "bg-gray-400"
            } hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition`}
            onClick={() => setSelectedGroup(group)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {group}
          </motion.button>
        ))}
      </div>

      {/* Mobile Custom Dropdown */}
      <div className="md:hidden flex justify-center relative">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 w-full rounded-lg border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {selectedGroup || "Select Group"}
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto thin-scrollbar"
          >
            {groups.map((group, index) => (
              <div
                key={group}
                onClick={() => handleOptionClick(group)}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  hoveredOption === index
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }`}
                role="option"
                aria-selected={selectedGroup === group}
              >
                {group}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupFilter;
