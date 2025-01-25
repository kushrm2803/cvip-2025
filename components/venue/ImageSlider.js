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
              whileHover={{ scale: 1.1 }}
              className={`overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
                isActive ? "opacity-100" : "opacity-50"
              }`}
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
