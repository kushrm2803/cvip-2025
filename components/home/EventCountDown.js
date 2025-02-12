"use client";

import { useState, useEffect } from "react";

const EventCountDown = ({ eventStartDate, eventEndDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(eventStartDate) - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventStartDate]);

  return (
    <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg min-h-[30vh] grid grid-cols-1 lg:grid-cols-3 gap-7 items-center text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Venue</h2>
        <p className="text-xl mb-6">IIT Ropar, Punjab, India</p>
      </div>
      <div className="text-center">
        <p className="text-xl mb-2">
          <strong>Date:</strong>{" "}
          {new Date(eventStartDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}{" "}
          -{" "}
          {new Date(eventEndDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="text-xl mb-2">
          <strong>Time:</strong> 9:00 AM - 5:00 PM IST
        </p>
      </div>
      <div className="text-3xl font-semibold flex justify-center">
        <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-2">
          {timeLeft.days} <p className="text-sm">Days</p>
        </span>
        <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-2">
          {timeLeft.hours} <p className="text-sm">Hrs</p>
        </span>
        <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-2">
          {timeLeft.minutes} <p className="text-sm">Min</p>
        </span>
        <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-2">
          {timeLeft.seconds} <p className="text-sm">Sec</p>
        </span>
      </div>
    </div>
  );
};

export default EventCountDown;
