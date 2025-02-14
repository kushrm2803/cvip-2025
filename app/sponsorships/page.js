"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SponsorshipTable from "@/components/sponsorship/SponsorshipTable";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2 
    } 
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SponsorshipPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="Sponsorship & Exhibitor Opportunities"
        imageUrl="/iitropar-pics/iitropar-pic-7.jpg"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white p-4 md:p-8 rounded-xl shadow-lg mb-8"
      >
        <motion.section
          className="mb-8"
          variants={sectionVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Exhibitor and Sponsorship Opportunities
          </h2>
          <p className="text-base md:text-lg mb-4">
            Whether you are showcasing new products and services or recruiting new talent, CVIP 2025 is where the international computing and applications community convenes – providing an opportunity to highlight what your company has to offer and reach decision-makers with real buying power.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Reasons Why You Should Take Part In CVIP 2025
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Grow Your Audience</h3>
              <p className="text-base md:text-lg">
                Cultivate new business leads by showcasing your offerings at a prestigious event that attracts industry professionals from around the globe.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Networking</h3>
              <p className="text-base md:text-lg">
                Build and nurture relationships with industry leaders, innovators, and decision-makers who can help propel your business forward.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Increase Brand Awareness</h3>
              <p className="text-base md:text-lg">
                Position your company as a thought leader and gain maximum exposure through our event's extensive publicity.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Drive Innovation</h3>
              <p className="text-base md:text-lg">
                Discover cutting-edge technologies and creative solutions that can fuel the next phase of your company's growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Enhance Competitive Edge</h3>
              <p className="text-base md:text-lg">
                Gain insights from industry experts and leverage our platform to boost your market presence and stay ahead of the competition.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Sponsorship Tiers
          </h2>
          <SponsorshipTable />
        </motion.section>

        <motion.section
          className="mt-8"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
          }}
        >
          <p className="text-base md:text-lg text-center mb-4">
            CVIP 2025 attracts decision-makers looking for the next generation of products, solutions, and advanced industry perspectives. Put yourself in the position to meet them by supporting CVIP 2025!
          </p>
          <p className="text-base md:text-lg text-center font-semibold">
            Secure your sponsorship today.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SponsorshipPage;
