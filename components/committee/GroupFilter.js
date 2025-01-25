'use client';
import React from "react";
import { motion } from "framer-motion";

const GroupFilter = ({ groups, selectedGroup, setSelectedGroup }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {groups.map((group) => (
        <motion.button
          key={group}
          className={`px-6 py-2 rounded-lg text-white ${
            selectedGroup === group ? "bg-red-500" : "bg-gray-400"
          } hover:bg-red-800 transition`}
          onClick={() => setSelectedGroup(group)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {group}
        </motion.button>
      ))}
    </div>
  );
};

export default GroupFilter;
