"use client";

import React from "react";
import { motion } from "framer-motion";

const sponsorshipTiers = [
  {
    type: "Platinum",
    fund: "5 Lacs",
    complimentaryPass: "7",
    tableStall: "Stall",
    websiteBranding: "Yes",
    brochureBranding: "Yes",
    participation: "Yes",
    brandingDuringBreaks: "Yes",
  },
  {
    type: "Diamond",
    fund: "3 Lacs",
    complimentaryPass: "4",
    tableStall: "Stall",
    websiteBranding: "Yes",
    brochureBranding: "Yes",
    participation: "Yes",
    brandingDuringBreaks: "No",
  },
  {
    type: "Gold",
    fund: "2 Lacs",
    complimentaryPass: "3",
    tableStall: "Table",
    websiteBranding: "Yes",
    brochureBranding: "Yes",
    participation: "Yes",
    brandingDuringBreaks: "No",
  },
  {
    type: "Silver",
    fund: "1 Lacs",
    complimentaryPass: "2",
    tableStall: "Table",
    websiteBranding: "Yes",
    brochureBranding: "No",
    participation: "No",
    brandingDuringBreaks: "No",
  },
  {
    type: "Bronze",
    fund: "50 K",
    complimentaryPass: "1",
    tableStall: "No",
    websiteBranding: "Yes",
    brochureBranding: "No",
    participation: "No",
    brandingDuringBreaks: "No",
  },
  {
    type: "Awards and Session Sponsorship",
    fund: "Discussion with organizers",
    complimentaryPass: "1",
    tableStall: "No",
    websiteBranding: "Yes",
    brochureBranding: "No",
    participation: "No",
    brandingDuringBreaks: "No",
  },
];

const SponsorshipTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-auto scrollbar-thin"
    >
      <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 md:px-4 py-2">Type of Sponsorship</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Fund (₹)</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Complimentary Pass</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Table/Stall</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Website/Branding</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Brochure Branding</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Participation in Industry Session</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Branding During Breaks</th>
          </tr>
        </thead>
        <tbody>
          {sponsorshipTiers.map((tier, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.type}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.fund}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.complimentaryPass}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.tableStall}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.websiteBranding}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.brochureBranding}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.participation}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">{tier.brandingDuringBreaks}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default SponsorshipTable;
