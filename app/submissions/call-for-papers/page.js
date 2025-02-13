"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import CallForPapersTopics from "@/components/submissions/call-for-paper-topics";
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
        title="Call for Papers"
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
              Submission Invitation
            </h2>
            <p className="text-base md:text-lg mb-4">
              CVIP 2025 warmly invites pioneering research that challenges the status quo in artificial intelligence, computer vision, and image processing, along with their related fields. We are eager to receive submissions that introduce innovative methods and practical solutions to emerging challenges.
            </p>
            <p className="text-base md:text-lg mb-4">
              Whether you are an established expert or an up-and-coming researcher, your contribution is vital to driving forward these exciting areas of study.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} className="mb-8">
            <CallForPapersTopics />
          </motion.section>

          <motion.section variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Publication and Indexing
            </h2>
            <p className="text-base md:text-lg mb-4">
              Accepted papers will be featured in the esteemed Springer CCIS series and will be widely indexed in scholarly databases such as DBLP, Google Scholar, EI-Compendex, ISI Proceedings, and Scopus—guaranteeing your research receives the recognition it deserves.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Retrieve the Full Document
            </h2>
            <p className="text-base md:text-lg mb-4 text-center">
              For detailed submission instructions and formatting guidelines, please download the complete Call for Papers document.
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
