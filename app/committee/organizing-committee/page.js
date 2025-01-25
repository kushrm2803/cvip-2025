"use client";
import React, { useState } from "react";
import GroupFilter from "@/components/committee/GroupFilter";
import MembersGrid from "@/components/committee/MembersGrid";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const page = () => {
  const [selectedGroup, setSelectedGroup] = useState("Patrons");

  const committeeData = {
    Patrons: [
      {
        name: "Dr. John Doe",
        role: "Chief Patron",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/john",
      },
    ],
    "General Chair": [
      {
        name: "Dr. Jane Smith",
        role: "General Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/jane",
      },
      {
        name: "Dr. Sarah Lee",
        role: "General Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/sarah",
      },
      {
        name: "Dr. Mark Brown",
        role: "General Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/mark",
      },
      {
        name: "Dr. Lisa White",
        role: "General Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/lisa",
      },
    ],
    "General Co-Chair": [
      {
        name: "Dr. Peter Green",
        role: "General Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/peter",
      },
      {
        name: "Dr. Emily Stone",
        role: "General Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/emily",
      },
      {
        name: "Dr. Tom Harris",
        role: "General Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/tom",
      },
      {
        name: "Dr. Katie Grey",
        role: "General Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/katie",
      },
    ],
    "Conference Chair": [
      {
        name: "Dr. Adam Black",
        role: "Conference Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/adam",
      },
      {
        name: "Dr. James White",
        role: "Conference Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/james",
      },
    ],
    "Conference Co-Chair": [
      {
        name: "Dr. Rachel Blue",
        role: "Conference Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/rachel",
      },
      {
        name: "Dr. Steve Brown",
        role: "Conference Co-Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/steve",
      },
    ],
    "Conference Conveners": [
      {
        name: "Dr. Anna White",
        role: "Conference Convener",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/anna",
      },
      {
        name: "Dr. Daniel Grey",
        role: "Conference Convener",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/daniel",
      },
    ],
    "Publicity Chairs": [
      {
        name: "Dr. Charles Smith",
        role: "Publicity Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/charles",
      },
      {
        name: "Dr. Nancy Green",
        role: "Publicity Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/nancy",
      },
    ],
    "Technical Program Chairs": [
      {
        name: "Dr. Alice Cooper",
        role: "Program Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/alice",
      },
      {
        name: "Dr. John Black",
        role: "Program Chair",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/john",
      },
    ],
    "Local Organizing Committee": [
      {
        name: "Dr. Bob Brown",
        role: "Committee Member",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/bob",
      },
      {
        name: "Dr. Lily Grey",
        role: "Committee Member",
        image: "/committee/rajeev-ahuja.jpeg",
        link: "https://scholar.google.com/lily",
      },
    ],
  };

  const groups = Object.keys(committeeData);
  const members = committeeData[selectedGroup];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <HeroSection
        key={Math.random()}
        title="Organizing Committee"
        imageUrl="/home/college-photo.jpeg"
      />
      <div className="mt-4">
        <GroupFilter
          groups={groups}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
      </div>

      <motion.div
        className="my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MembersGrid members={members} />
      </motion.div>
    </div>
  );
};

export default page;
