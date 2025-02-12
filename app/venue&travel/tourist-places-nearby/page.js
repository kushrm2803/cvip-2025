"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import TouristPlace from "@/components/venue/TouristPlace";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  exit: { opacity: 0 },
};

const NearbyTouristPlacesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="Nearby Tourist Places"
        imageUrl="/home/college-photo.jpeg"
      />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white p-4 md:p-8 rounded-xl shadow-lg mt-8"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore the Area
          </motion.h2>

          <TouristPlace
            imageUrl="/home/college-photo.jpeg"
            title="Rupnagar (Ropar)"
            description="Rupnagar, known as Ropar, is an ancient historical site with a rich cultural heritage and archaeological significance. Explore ruins, museums, and the relics of its storied past."
            distance="Approximately 3 km from the IIT Ropar campus."
            moreInfo="Don't miss the local museum and archaeological sites."
          />

          <TouristPlace
            imageUrl="/home/college-photo.jpeg"
            title="Chandigarh"
            description="Chandigarh, often referred to as 'The City Beautiful', is famous for its modern architecture, lush green spaces, and iconic attractions like the Rock Garden, Sukhna Lake, and Capitol Complex."
            reverse={true}
            distance="Approximately 60 km by road from IIT Ropar."
            moreInfo="Experience vibrant urban attractions and well-planned landscapes."
          />

          <TouristPlace
            imageUrl="/home/college-photo.jpeg"
            title="Pinjore Gardens"
            description="Pinjore Gardens is a historic Mughal garden known for its scenic landscapes, vibrant floral displays, and serene ambiance—a perfect retreat near Chandigarh."
            distance="Around 90 km by road from IIT Ropar."
            moreInfo="Enjoy a leisurely day amidst lush gardens and ancient architecture."
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NearbyTouristPlacesPage;
