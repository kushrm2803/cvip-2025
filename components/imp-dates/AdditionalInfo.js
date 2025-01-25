"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const AdditionalInfo = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="additional-info"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Additional Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
          Please ensure that all papers are submitted before the respective
          deadlines. Visit the <Link href="/guidelines">guidelines</Link> page
          for more information about formatting and submission instructions.
          Stay updated with important announcements and notifications.
        </p>
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/author-guidelines"
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow hover:bg-red-800 transition"
          >
            Guidelines
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdditionalInfo;
