"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AboutIITRopar = () => {
  return (
    <div className="mt-6  min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/home/college-photo.jpeg" 
              alt="IIT Ropar Campus" 
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="text-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">About IIT Ropar</h2>
            <p className="text-lg leading-relaxed mb-4">
              Indian Institute of Technology Ropar (IIT Ropar) is one of the premier institutes of higher education in India.
              Established in 2008, the institute is committed to providing state-of-the-art education and conducting
              cutting-edge research in engineering, science, and technology.
            </p>
            <p className="text-lg leading-relaxed">
              Located in the vibrant state of Punjab, IIT Ropar boasts a modern campus with world-class facilities,
              renowned faculty, and a dynamic student community. The institute is dedicated to fostering innovation
              and excellence in various fields of study.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutIITRopar;