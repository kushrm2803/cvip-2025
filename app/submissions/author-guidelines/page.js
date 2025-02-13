"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const AuthorGuidelinesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="Author Guidelines"
        imageUrl="/home/college-photo.jpeg"
      />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-8"
        >
          <motion.article
            variants={sectionVariants}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
          >
            <header className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Instructions for Preparing Manuscripts
              </h2>
            </header>
            <div>
              <p className="text-base md:text-lg mb-4">
                Prospective authors are invited to submit full-length original
                research papers. In submitting a manuscript to CVIP 2025, authors
                acknowledge that no paper substantially similar in content has
                been or will be submitted to another journal, conference or
                workshop during the review period. In such a case, the paper will
                be rejected without review.
              </p>
              <p className="text-base md:text-lg mb-4">
                Papers must be electronically submitted to the Microsoft Research
                paper submission portal before the deadline expires without
                exception.
              </p>
              <p className="text-base md:text-lg mb-4">
                Authors should prepare their manuscripts of 12-15 pages (including
                all text, figures, and references). The manuscript must be
                submitted in pdf format only and the file size of your manuscript
                should not exceed 10 MB as per guidelines of Springer-CCIS Series (
                <Link
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Click
                </Link>
                ).
              </p>
              <p className="text-base md:text-lg mb-4">
                Use a proper tool to convert the resulting source into a pdf
                document that has only scalable fonts with all fonts embedded.
              </p>
              <p className="text-base md:text-lg mb-4">
                The images embedded in the paper must not contain transparent
                pixels (i.e., an alpha-channel of a transparent color) since this
                could lead to problems when displaying or printing the pdf.
              </p>
              <p className="text-base md:text-lg mb-4">
                The pdf manuscript must not have Adobe Document Protection or
                Document Security enabled.
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={sectionVariants}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
          >
            <header className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Proceedings
              </h2>
            </header>
            <div>
              <p className="text-base md:text-lg mb-4">
                The proceedings of the conference will be published by Scopus
                Indexed – Springer in{" "}
                <Link
                  href="https://www.springer.com/series/7899"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Communications in Computer and Information Science series
                </Link>
                . CCIS is abstracted/indexed in DBLP, Google Scholar,
                EI-Compendex, Mathematical Reviews, SCImago, Scopus. CCIS volumes
                are also submitted for inclusion in ISI Proceedings.
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={sectionVariants}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
          >
            <header className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Preparing Your Proceedings Paper
              </h2>
            </header>
            <div>
              <p className="text-base md:text-lg mb-4">
                For your convenience, we have summarized in the “Author
                Guidelines” document how a proceedings paper should be structured,
                how elements (headings, figures, references) should be formatted
                using our predefined styles, etc. We also give some insight on how
                your paper will be typeset at CVIP. The PDF of the Authors
                Guidelines can be downloaded here:{" "}
                <Link
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Proceedings Guidelines for Authors
                </Link>
                .
              </p>
              <p className="text-base md:text-lg mb-4">
                Authors must use the manuscript template specified here. The LaTeX
                and Word templates can be downloaded from the following links:
              </p>
              <ul className="list-disc list-inside text-base md:text-lg mb-4">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    LaTeX Template
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Word Template
                  </Link>
                </li>
              </ul>
              <p className="text-base md:text-lg mb-4">
                Authors can use the Proceedings Templates available in the
                scientific authoring platform Overleaf (
                <Link
                  href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WuA4JS5uZpi"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Template
                </Link>
                ).
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={sectionVariants}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
          >
            <header className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Instruction for Manuscript Submission
              </h2>
            </header>
            <div>
              <p className="text-base md:text-lg mb-4">
                The manuscript has to be uploaded online at the CVIP 2025
                Microsoft Research paper submission portal at the following link:
              </p>
              <p className="text-base md:text-lg">
                <Link
                  href="https://cmt3.research.microsoft.com/CVIP2025"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cmt3.research.microsoft.com/CVIP2025
                </Link>
              </p>
            </div>
          </motion.article>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthorGuidelinesPage;
