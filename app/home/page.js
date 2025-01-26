import React from 'react'
import Carousel from "@/components/home/carousel/Carousel"
import ConferenceDetails from "@/components/home/ConferenceDetails";
import SpeakersSection from '@/components/home/SpeakerSection';
import AboutIITRopar from '@/components/home/AboutIITRPR';
import SponsorsSection from '@/components/home/SponsorSection';


const page = () => {
  return (
    <div>
        <Carousel />
        <ConferenceDetails/>
        <SpeakersSection />
        <AboutIITRopar />
        <SponsorsSection/>
    </div>
  )
}

export default page