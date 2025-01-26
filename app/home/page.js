import React from 'react'
import Carousel from "@/components/home/carousel/Carousel"
import ConferenceDetails from "@/components/home/ConferenceDetails";

const newsArray = [
  { date: "January 25, 2025", title: "Next.js 15 Released", description: "New features and improvements!" },
  { date: "January 20, 2025", title: "Conference Tickets Available", description: "Get your early bird tickets now!" },
];



const page = () => {
  return (
    <div>
        <Carousel />
        <ConferenceDetails/>
    </div>
  )
}

export default page