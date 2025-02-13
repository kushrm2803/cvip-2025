"use client";

import React from "react";
import { motion } from "framer-motion";

const topicsList = [
  "Activity Detection and Recognition",
  "Biometrics and Forensic Analysis",
  "Compressed Video Processing",
  "Innovative Computational Imaging",
  "Deep Learning for Visual Data",
  "Document and Synthetic Image Analysis",
  "Interpretable AI for Vision",
  "Generative Models in Imaging",
  "Medical Image Computing",
  "Remote Sensing & Hyperspectral Analysis",
  "3D Reconstruction Techniques",
];

const topicVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const CallForPapersTopics = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={topicVariants}
      className="bg-red-50 p-8 rounded-xl shadow-lg w-full"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Research Topics
      </h2>
      <p className="text-base md:text-lg mb-4">
        We welcome submissions on a diverse range of subjects, including (but not limited to):
      </p>
      <ul className="list-disc list-inside text-base md:text-lg">
        {topicsList.map((topic, index) => (
          <motion.li key={index} variants={topicVariants}>
            {topic}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CallForPapersTopics;
