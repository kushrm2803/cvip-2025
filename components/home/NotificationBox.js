"use client"
import React from 'react';
import { motion } from "framer-motion"

const NotificationBox = ({ title, message, bgColor }) => {
    return (
      <motion.div 
        className={`p-4 sm:p-6 rounded-xl shadow-md ${bgColor} w-full max-w-full`}
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-900">{title}</p>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{message}</p>
      </motion.div>
    );
};

export default NotificationBox;
