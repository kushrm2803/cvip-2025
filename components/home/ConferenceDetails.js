"use client"
import React from 'react';
import {motion} from "framer-motion"
import ConferenceInfo from '@/components/home/ConferenceInfo';
import NotificationsList from '@/components/home/NotificationsList';

const ConferenceDetails = () => {
    return (
      <div id="conference-about" className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 w-full">
              <ConferenceInfo />
            </div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg w-full lg:col-span-2 lg:min-h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            //   viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Latest News</h3>
              <NotificationsList />
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
export default ConferenceDetails;
