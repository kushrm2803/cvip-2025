"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/home/college-photo.jpeg",
  "/home/college-photo.jpeg",
  "/home/college-photo.jpeg",
  "/home/college-photo.jpeg",
  "/home/college-photo.jpeg",
];

const ImageSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full max-w-5xl mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <motion.div
              animate={{
                scale: isActive ? 1.2 : 0.9,
                opacity: isActive ? 1 : 0.7,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.5 }}
              whileHover={isActive ? { scale: 1.25 } : {}}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`Institute ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
