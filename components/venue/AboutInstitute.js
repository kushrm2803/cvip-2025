import React from "react";
import { motion } from "framer-motion";

const AboutInstitute = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-center mb-6">About the Institute</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        The conference is hosted by the renowned <strong>Indian Institute of Technology, Ropar</strong>, recognized for its cutting-edge research, academic excellence, and innovative spirit. Established with the vision of nurturing future leaders in science, technology, and engineering, IIT Ropar has rapidly emerged as a hub for transformative learning and groundbreaking research.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Located in the vibrant city of Ropar in Punjab, the institute is set on a sprawling, modern campus that harmoniously blends state-of-the-art infrastructure with natural beauty. The serene environment provides an ideal setting for academic discussions, creative pursuits, and innovative projects.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        IIT Ropar boasts advanced research laboratories, well-equipped lecture halls, and cutting-edge computing facilities. The institute’s dynamic academic environment encourages interdisciplinary collaboration, focusing on sustainable development, digital transformation, and pioneering engineering advancements.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Beyond its academic achievements, IIT Ropar actively fosters research collaborations with industry leaders and international institutions. This approach not only enriches the learning experience but also prepares students to tackle global challenges head-on. The campus life is vibrant, supported by modern hostels, recreational facilities, sports complexes, and cultural events that contribute to the holistic development of its students.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Committed to excellence in teaching, research, and innovation, IIT Ropar continues to make significant contributions to science and technology, establishing itself as a prestigious institution both in India and on the global stage.
      </p>
    </motion.div>
  );
};

export default AboutInstitute;
