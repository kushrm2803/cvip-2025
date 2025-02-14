"use client";
import React from "react";
import { motion } from "framer-motion";
import TouristPlace from "@/components/venue/TouristPlace";

const touristPlacesData = [
  {
    imageUrl: "/venue/venue-1.jpg",
    title: "Rupnagar (Ropar)",
    description:
      "Rupnagar, known as Ropar, is an ancient historical site with a rich cultural heritage and archaeological significance. Explore ruins, museums, and the relics of its storied past.",
    distance: "Approximately 3 km from the IIT Ropar campus.",
    moreInfo: "Don't miss the local museum and archaeological sites.",
  },
  {
    imageUrl: "/venue/venue-2.jpg",
    title: "Chandigarh",
    description:
      "Chandigarh, often referred to as 'The City Beautiful', is famous for its modern architecture, lush green spaces, and iconic attractions like the Rock Garden, Sukhna Lake, and Capitol Complex.",
    reverse: true,
    distance: "Approximately 60 km by road from IIT Ropar.",
    moreInfo:
      "Experience vibrant urban attractions and well-planned landscapes.",
  },
  {
    imageUrl: "/venue/venue-3.jpg",
    title: "Pinjore Gardens",
    description:
      "Pinjore Gardens is a historic Mughal garden known for its scenic landscapes, vibrant floral displays, and serene ambiance—a perfect retreat near Chandigarh.",
    distance: "Around 90 km by road from IIT Ropar.",
    moreInfo:
      "Enjoy a leisurely day amidst lush gardens and ancient architecture.",
  },
  {
    imageUrl: "/venue/venue-4.jpg",
    title: "Virasat-e-Khalsa",
    description:
      "Virasat-e-Khalsa, the monument of Sikh culture, is a striking museum that celebrates the rich heritage and traditions of the Sikh community. It is a must-visit for those interested in the history and art of the region.",
    distance: "Approximately 40 km from the IIT Ropar campus.",
    reverse: true,
    moreInfo:
      "Immerse yourself in captivating narratives and exhibits showcasing Sikh art, history, and spirituality.",
  },
];

const TouristPlaces = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      {touristPlacesData.map((place, index) => (
        <TouristPlace key={index} {...place} />
      ))}
    </motion.div>
  );
};

export default TouristPlaces;
