"use client";

import { motion } from "framer-motion";

const CarouselItem = ({ src, alt, isActive, children }) => {
  return (
    <motion.div
      className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0 hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute block w-full h-full object-cover"
      />
      {children}
    </motion.div>
  );
};

export default CarouselItem;
