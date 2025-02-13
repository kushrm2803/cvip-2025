"use client"
import React from "react";
import {motion} from 'framer-motion'

const ConferenceInfo = () => {
    return (
      <motion.div 
        className="bg-red-50 p-8 rounded-xl shadow-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">CVIP 2025</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The 10th International Conference on Computer Vision & Image Processing (CVIP-2025), a premier annual conference focused on Computer Vision and Image Processing will be held on December 10-13, 2025 at Indian Institute of Technology Ropar (IIT Ropar).
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            CVIP provides a great platform to students, academia, researchers and industry persons. Previous editions of CVIP were held at IIIT Kancheepuram (CVIP-2024), IIT Jammu (CVIP-2023), VNIT Nagpur (CVIP-2022), IIT Ropar (CVIP-2021), IIIT Allahabad (CVIP-2020), MNIT Jaipur (CVIP 2019), IIIT Jabalpur (CVIP-2018), and IIT Roorkee (CVIP-2017 and CVIP-2016). All editions of CVIP have been endorsed by the International Association for Pattern Recognition "IAPR". Also the conference proceedings are published in Springer Series on Communications in Computer and Information Science (CCIS) Springer.
        </p>
      </motion.div>
    );
  };

  export default ConferenceInfo;
  