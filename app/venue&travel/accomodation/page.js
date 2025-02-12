"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const AccommodationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <HeroSection
        key={Math.random()}
        title="Accommodation & Travel Grants"
        imageUrl="/home/college-photo.jpeg"
      />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white p-4 md:p-8 rounded-xl shadow-lg mb-8"
        >
          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Travel & Accommodation Grants
            </h2>
            <p className="text-base md:text-lg mb-4">
              We are pleased to announce that travel and accommodation grants
              will be provided to eligible participants attending CVIP 2025.
              These grants are designed to support researchers and professionals
              in participating in our conference without any financial burden.
            </p>
            <p className="text-base md:text-lg mb-4">
              The travel grants will cover airfare, local transportation, and
              accommodation expenses for the duration of the conference.
              Detailed guidelines and eligibility criteria will be provided at a
              later stage.
            </p>
            <p className="text-base md:text-lg">
              For more details, further information will be notified later.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Application Process
            </h2>
            <p className="text-base md:text-lg mb-4">
              The application process for these grants will be announced soon.
              Please stay tuned to our official website and your registered
              email for updates regarding the application timeline and required
              documentation.
            </p>
            <p className="text-base md:text-lg">
              We look forward to welcoming you to CVIP 2025 and ensuring a
              comfortable travel experience.
            </p>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccommodationPage;
