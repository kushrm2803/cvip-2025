'use client';
import React from "react";
import { motion } from "framer-motion";
import MemberCard from "./MemberCard";

const MembersGrid = ({ members }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {members.map((member) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 * members.indexOf(member), duration: 0.8 }}
        >
          <MemberCard
            name={member.name}
            role={member.role}
            image={member.image}
            link={member.link}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MembersGrid;
