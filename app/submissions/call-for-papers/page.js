"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const CallForPapersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="CVIP 2024 Call for Papers"
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
          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Invitation for Submissions
            </h2>
            <p className="text-base md:text-lg mb-4">
              CVIP 2025 is calling for innovative research that pioneers new methodologies in artificial intelligence, computer vision, and image processing, as well as in related fields. We welcome original contributions that challenge conventional approaches and introduce creative solutions to real-world problems.
            </p>
            <p className="text-base md:text-lg mb-4">
              Whether you are a seasoned researcher or an emerging talent, your work can help shape the future of these dynamic disciplines.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Research Tracks
            </h2>
            <p className="text-base md:text-lg mb-4">
              Submissions may explore a wide range of topics, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg mb-4">
              <li>Activity Detection and Recognition</li>
              <li>Biometrics and Forensics</li>
              <li>Compressed Video Analytics</li>
              <li>Computational Imaging Techniques</li>
              <li>Deep Learning for Visual Understanding</li>
              <li>Document and Synthetic Image Processing</li>
              <li>Explainable AI in Vision Systems</li>
              <li>Generative Models for Image Synthesis</li>
              <li>Medical Image Analysis</li>
              <li>Remote Sensing and Hyperspectral Analysis</li>
              <li>3D Imaging and Reconstruction</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Publication & Indexing
            </h2>
            <p className="text-base md:text-lg mb-4">
              All accepted papers will be published in the renowned Springer CCIS series. Your work will also be indexed in major databases including DBLP, Google Scholar, EI-Compendex, ISI Proceedings, and Scopus—ensuring broad visibility within the research community.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Download the Call for Papers
            </h2>
            <p className="text-base md:text-lg mb-4 text-center">
              For comprehensive submission guidelines and formatting instructions, please download the Call for Papers document.
            </p>
            <div className="text-center">
              <Link
                href="/files/CallForPapers_CVIP2024.pdf"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-500"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CallForPapersPage;
