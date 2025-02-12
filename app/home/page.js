import React from 'react'
import Carousel from "@/components/home/carousel/Carousel"
import ConferenceDetails from "@/components/home/ConferenceDetails";
import SpeakersSection from '@/components/home/SpeakerSection';
import AboutIITRopar from '@/components/home/AboutIITRPR';
import SponsorsSection from '@/components/home/SponsorSection';
import EventCountDown from '@/components/home/EventCountDown';


const page = () => {
  return (
    <div className='w-full'>
        <Carousel />
        <ConferenceDetails/>
        <SpeakersSection />
        <EventCountDown eventDate="2025-12-11T00:00:00"/>
        <AboutIITRopar />
        <SponsorsSection/>
    </div>
  )
}

export default page