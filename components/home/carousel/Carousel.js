"use client";

import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import ScrollButton from "./ScrollButton";

const Carousel = () => {
  const slides = [
    {
      src: "/home/college-photo.jpeg",
      alt: "CVIP 2022 Conference",
      content: (
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            7th International Conference on
            <br />
            Computer Vision & Image Processing
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            04-06 November, 2022 | VNIT Nagpur, Maharashtra - 440010, INDIA
          </p>
          <ScrollButton targetId="about">About CVIP 2022</ScrollButton>
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
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              src={slide.src}
              alt={slide.alt}
              isActive={index === currentSlide}
            >
              {index === 0 && slide.content}
            </CarouselItem>
          ))}
        </div>

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
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

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
    </div>
  );
};

export default Carousel;
