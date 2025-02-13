"use client";
import React from "react";
import NotificationBox from "@/components/home/NotificationBox";

const NotificationsList = () => {
  return (
    <div className="space-y-4 max-h-[420px] w-full max-w-full overflow-hidden hover:overflow-y-auto pr-3 thin-scrollbar">
      <NotificationBox
        title="Registration Open!"
        message="Don't miss out on securing your spot at the event. Early bird registration ends soon!"
        bgColor="bg-blue-50"
      />

      <NotificationBox
        title="Schedule Update"
        message="Check out the updated conference schedule on our website!"
        bgColor="bg-yellow-50"
      />
      <NotificationBox
        title="Sponsorship Opportunities"
        message="CVIP 2025 is now open for sponsorships! Enhance your brand's visibility by joining us as a sponsor. Explore exclusive packages and benefits."
        bgColor="bg-green-50"
      />
    </div>
  );
};

export default NotificationsList;
