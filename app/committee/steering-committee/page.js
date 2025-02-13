"use client";
import React, {useState, useEffect} from "react";
import MemberCard from "@/components/committee/MemberCard";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const SteeringCommittee = () => {
  const steeringMembers = [
    {
      name: "Dr. Elizabeth Green",
      role: "Senior Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Michael Lee",
      role: "Technical Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/michael",
    },
    {
      name: "Dr. Susan White",
      role: "Strategic Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/susan",
    },
    {
      name: "Dr. David Brown",
      role: "External Relations Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/david",
    },
    {
      name: "Dr. Anna Black",
      role: "Research Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/anna",
    },
    {
      name: "Dr. Elizabeth Green",
      role: "Senior Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Dustin Green",
      role: "Senior Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Elizabeth Jacob",
      role: "Senior Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/elizabeth",
    },
    {
      name: "Dr. Eliz Green",
      role: "Senior Advisor",
      image: "/committee/rajeev-ahuja.jpeg",
      link: "https://scholar.google.com/elizabeth",
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <HeroSection
        title="Steering Committee"
        imageUrl="/home/college-photo.jpeg"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto mt-4"
      >
        {steeringMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            link={member.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SteeringCommittee;
