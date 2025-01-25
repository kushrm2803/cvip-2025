"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CarouselItem = ({ src, alt, isActive, showOverlay }) => {
  return (
    <motion.div
      className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0 hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      />
      {showOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Annual Tech Conference 2025</h2>
            <p className="mt-2 text-lg">
              Join us for an inspiring event with top speakers and workshops.
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Carousel = () => {
  const slides = [
    { src: "/home/college-photo.jpeg", alt: "Slide 1" },
    { src: "/home/spiral.jpg", alt: "Slide 2" },
    { src: "/home/college-photo.jpeg", alt: "Slide 3" },
    { src: "/home/spiral.jpg", alt: "Slide 4" },
    { src: "/home/college-photo.jpeg", alt: "Slide 5" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-80 md:h-[30rem] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            src={slide.src}
            alt={slide.alt}
            isActive={index === currentSlide}
            showOverlay={index === 0}
          />
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
