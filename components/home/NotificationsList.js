"use client"
import React from 'react';
import NotificationBox from '@/components/home/NotificationBox';

const NotificationsList = () => {
  return (
    <div className="space-y-4 max-h-[420px] overflow-y-hidden hover:overflow-y-auto pr-[15px] thin-scrollbar">
      <NotificationBox 
        title="Registration Open!" 
        message="Don't miss out on securing your spot at the event. Early bird registration ends soon!" 
        bgColor="bg-blue-50"
      />
      <NotificationBox 
        title="New Speakers Announced" 
        message="We're excited to announce new keynote speakers from top tech companies!" 
        bgColor="bg-green-50"
      />
      <NotificationBox 
        title="Schedule Update" 
        message="Check out the updated conference schedule on our website!" 
        bgColor="bg-yellow-50"
      />
      <NotificationBox 
        title="Schedule Update" 
        message="Check out the updated conference schedule on our website!" 
        bgColor="bg-yellow-50"
      />
    </div>
  );
};

export default NotificationsList;
