'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DatesTable = ({ dates }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dates-table"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Important Deadlines
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 border">Phase</th>
                <th className="p-4 border">Date</th>
                <th className="p-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="p-4 border">{date.phase}</td>
                  <td className="p-4 border">{date.date}</td>
                  <td className="p-4 border">
                    <span
                      className={`${
                        date.status === "Open"
                          ? "text-green-600"
                          : date.status === "Closed"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {date.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DatesTable;
