"use client";

import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8"
    >
      <div className="bg-red-100 p-8 sm:p-10 md:p-12 rounded-xl shadow-lg text-center w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="text-blue-600 hover:underline text-sm sm:text-base md:text-lg"
        >
          Go back home
        </a>
      </div>
    </motion.div>
  );
};

export default NotFound;
