"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { AnimatePresence, motion } from "framer-motion";

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

const HowToReachPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="How to Reach IIT Ropar"
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
              Arrival by Air
            </h2>
            <p className="text-base md:text-lg mb-4">
              The nearest major airport is Chandigarh International Airport,
              located approximately 60 kilometers away from IIT Ropar. From
              Chandigarh, you can hire a taxi which will directly drop you to IIT Ropar Campus or take a bus service to reach Rupnagar City and then hire an auto or a taxi to reach IIT Ropar campus.
            </p>
            <p className="text-base md:text-lg">
              The drive from Chandigarh Airport to IIT Ropar typically takes
              around 1 to 1.5 hours, depending on traffic.
              The drive from Rupnagar City to IIT Ropar typically takes
              around 15 to 20 minutes.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Arrival by Train
            </h2>
            <p className="text-base md:text-lg mb-4">
              For those traveling by train, the nearest major railway station is
              Chandigarh Railway Station. In addition, there are smaller
              stations like Rupnagar Railway Station; however, it has limited connectivity.
            </p>
            <p className="text-base md:text-lg">
              Once you arrive at Chandigarh Railway Station, you can easily book
              a taxi or catch a bus, with the journey taking
              roughly 1 to 1.5 hours.
              You can book a taxi or auto directly for IIT Ropar campus if arriving at Rupnagar Railway Station.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              By Road
            </h2>
            <p className="text-base md:text-lg mb-4">
              Rupnagar city is well connected by road network through various parts of Punjab state. The route from Rupnagar city to IIT Ropar campus generally takes around 15-20 minutes while the
              route from Chandigarh to IIT Ropar generally takes around 1 to 1.5
              hours. 
            </p>
            <p className="text-base font-bold md:text-lg mt-11">
              Detailed route maps and further travel guidelines will be provided
              as the conference date approaches.
            </p>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HowToReachPage;
