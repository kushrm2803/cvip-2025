'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroSection = ({ title, imageUrl }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        className="relative h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-90 bg-black/60"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            {title}
          </h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSection;
