"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CarouselItem from "./CarouselItem";
import ScrollButton from "./ScrollButton";

const Carousel = () => {
  const slides = [
    {
      src: "/home/college-photo.jpeg",
      alt: "CVIP 2022 Conference",
      content: (
        <div className="absolute top-2 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-700 transform hover:scale-105">
            10th International Conference on
            <br />
            Computer Vision & Image Processing
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-90">
            11-13 December, 2025 | IIT Ropar, Punjab - 140001, INDIA
          </p>
          <div className="flex gap-4">
            <ScrollButton targetId="conference-about">
              About CVIP 2025
            </ScrollButton>
            <Link href="/imp-dates" passHref>
              <button className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-200">
                Important Dates
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    { src: "/home/spiral.jpg", alt: "Slide 2" },
    { src: "/home/college-photo.jpeg", alt: "Slide 3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const delay = currentSlide === 0 ? 7000 : 2500; // 6 seconds for the first slide, 3 seconds for others
    const interval = setTimeout(() => {
      handleNext();
    }, delay);
    return () => clearTimeout(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        {/* Map through slides */}
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            src={slide.src}
            alt={slide.alt}
            isActive={index === currentSlide}
            className="transition-all duration-500 ease-in-out transform"
          >
            {index === 0 && slide.content}
          </CarouselItem>
        ))}
      </div>

      <div className="absolute z-30 flex justify-center bottom-10 left-0 right-0">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentSlide ? "bg-blue-500 scale-110" : "bg-gray-300"
            } transition-all duration-300`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 hover:bg-white/70 group-focus:ring-4 group-focus:ring-white shadow-lg">
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
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 hover:bg-white/70 group-focus:ring-4 group-focus:ring-white shadow-lg">
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
