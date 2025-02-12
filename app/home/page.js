import React from "react";
import Carousel from "@/components/home/carousel/Carousel";
import ConferenceDetails from "@/components/home/ConferenceDetails";
import SpeakersSection from "@/components/home/SpeakerSection";
import AboutIITRopar from "@/components/home/AboutIITRPR";
import SponsorsSection from "@/components/home/SponsorSection";
import EventCountDown from "@/components/home/EventCountDown";
import DatesTable from "@/components/imp-dates/DatesTable";

const page = () => {
  const dates = [
    {
      phase: "Paper Submission Starts",
      date: "February 1st, 2025",
      status: "Open",
    },
    {
      phase: "First Round - Paper Submission Deadline",
      date: "April 30, 2025",
      status: "Closed",
    },
    {
      phase: "Notification of Paper Acceptance",
      date: "June 15, 2025",
      status: "Closed",
    },
    {
      phase: "Second Round - Paper Submission Deadline",
      date: "August 31, 2025",
      status: "Closed",
    },
    {
      phase: "Notification of Paper Acceptance",
      date: "October 15, 2025",
      status: "Closed",
    },
    {
      phase: "Camera Ready Submission Deadline",
      date: "November 05, 2025",
      status: "Open",
    },
    {
      phase: "Early Bird Registration Deadline",
      date: "November 05, 2025",
      status: "Open",
    },
    {
      phase: "Conference Dates",
      date: "December 11-13, 2025",
      status: "Scheduled",
    },
  ];
  return (
    <div className="w-full">
      <Carousel />
      <ConferenceDetails />
      {/* <SpeakersSection /> */}
      <EventCountDown
        eventStartDate="2025-12-10T00:00:00"
        eventEndDate="2025-12-13T00:00:00"
      />
      <div className="container mx-auto py-12 px-4">
        <DatesTable key={Math.random()} dates={dates} />
      </div>
      <AboutIITRopar />
      {/* <SponsorsSection/> */}
    </div>
  );
};

export default page;
