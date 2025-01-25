"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MemberCard = ({ name, role, image, link }) => {
  return (
    <motion.div
      className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>

      <motion.div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-semibold underline"
        >
          View Profile
        </a>
      </motion.div>
    </motion.div>
  );
};

export default MemberCard;
