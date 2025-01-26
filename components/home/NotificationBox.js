"use client"
import React from 'react';
import {motion} from "framer-motion"

const NotificationBox = ({ title, message, bgColor }) => {
    return (
      <motion.div 
        className={`p-6 rounded-xl shadow-md ${bgColor}`}
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        <p className="text-base text-gray-600 mt-2">{message}</p>
      </motion.div>
    );
  };

export default NotificationBox;
