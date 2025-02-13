"use client";

import React from "react";
import { motion } from "framer-motion";

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TouristPlace = ({
  imageUrl,
  title,
  description,
  distance,
  moreInfo,
  reverse = false,
}) => {
  return (
    <motion.div
      variants={blockVariants}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center my-8`}
    >
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:px-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 text-base md:text-lg">{description}</p>
        {distance && (
          <p className="text-gray-600 text-base md:text-lg mt-2">
            <strong>Distance:</strong> {distance}
          </p>
        )}
        {moreInfo && (
          <p className="text-gray-600 text-base md:text-lg mt-2">
            <strong>More Info:</strong> {moreInfo}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TouristPlace;
