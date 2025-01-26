"use client"

import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { id: 1, name: 'TechCorp', logo: '/iitropar-logo.jpg' },
  { id: 2, name: 'InnovateX', logo: '/iitropar-logo.jpg' },
  { id: 3, name: 'Cloudify', logo: '/iitropar-logo.jpg' },
  { id: 4, name: 'NextGen', logo: '/iitropar-logo.jpg' },
  { id: 5, name: 'SoftSolutions', logo: '/iitropar-logo.jpg' },
  { id: 6, name: 'GreenTech', logo: '/iitropar-logo.jpg' },
];

const SponsorsSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Sponsors</h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-between"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              initial={{ scale: 0.9, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center bg-white p-8 rounded-lg"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-44 w-auto object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsSection;
