"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({ isMobile, closeMenu }) => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleMouseEnter = (index) => {
    if (!isMobile) setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setDropdownIndex(null);
  };

  const handleClick = (index) => {
    if (isMobile) {
      setDropdownIndex(dropdownIndex === index ? null : index);
    }
  };

  const handleLinkClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  };

  const tabs = [
    { label: "Home", link: "/" },
    { label: "Important Dates", link: "/imp-dates" },
    {
      label: "Submissions",
      dropdown: [
        { label: "Call for Papers", link: "/submissions/call-for-papers" },
        // {
        //   label: "Program Schedule and Oral Presentation",
        //   link: "/submissions/program-schedule",
        // },
        { label: "Author Guidelines", link: "/submissions/author-guidelines" },
        // {
        //   label: "Presentation Guidelines",
        //   link: "/submissions/presentation-guidelines",
        // },
        // { label: "Accepted Papers", link: "/submissions/accepted-papers" },
        // { label: "Registered Papers", link: "/submissions/registered-papers" },
      ],
    },
    // { label: "Challenge", link: "/challenge" },
    // { label: "Awards", link: "/awards" },
    {
      label: "Venue & Travel",
      dropdown: [
        { label: "Conference Venue", link: "/venue&travel/conference-venue" },
        { label: "Accomodation", link: "/venue&travel/accomodation" },
        { label: "How to Reach?", link: "/venue&travel/how-to-reach" },
        {
          label: "Tourist Places Nearby",
          link: "/venue&travel/tourist-places-nearby",
        },
      ],
    },
    {
      label: "Committee",
      dropdown: [
        { label: "Organizing Committee", link: "/committee/organizing-committee",},
        { label: "Advisory Committee", link: "/committee/advisory-committee" },
        { label: "Steering Committee", link: "/committee/steering-comittee"}
      ],
    },
    { label: "Sponsorships", link: "/sponsorships" },
    { label: "Registrations", link: "/registrations" },
    {
      label: "Year",
      dropdown: [
        { label: "2024", link: "https://cvip2024.iiitdm.ac.in/" },
        { label: "2023", link: "https://iitjammu.ac.in/cvip2023/index.html" },
        { label: "2022", link: "https://vnit.ac.in/cvip2022/index.php" },
        { label: "2021", link: "https://link.springer.com/book/10.1007/978-3-031-11346-8" },
        { label: "2020", link: "https://cvip2020.iiita.ac.in/" },
        { label: "2019", link: "https://mnit.ac.in/" },
        { label: "2018", link: "https://www.iiitdmj.ac.in/CVIP-2018/" },
        { label: "2017", link: "https://www.iitr.ac.in/cvip2017/index.html" },
        { label: "2016", link: "https://www.iitr.ac.in/cvip2016/" },
        { label: "Past Proceedings", link: "https://link.springer.com/conference/cvip"}
      ],
    },
  ];

  const navClasses = isMobile
    ? "flex flex-col space-y-2"
    : "flex justify-center space-x-6";

  const dropdownClasses = isMobile
    ? "relative bg-gray-50 mt-2 rounded-md"
    : "absolute left-0 bg-white border rounded-md shadow-lg py-2 z-10 w-48";

  const linkClasses = isMobile
    ? "w-full px-4 py-2 block hover:bg-gray-100"
    : "text-gray-800 hover:text-blue-600 font-medium";

  return (
    <nav className="flex-grow">
      <ul className={navClasses}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`relative group ${isMobile ? "w-full" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex items-center justify-between ${
                isMobile ? "px-4 py-2 hover:bg-gray-100" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <Link
                href={tab.link || "#"}
                onClick={handleLinkClick}
                className={linkClasses}
              >
                {tab.label}
              </Link>

              {tab.dropdown && (
                <button
                  className="ml-2 focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index);
                  }}
                >
                  {dropdownIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  )}
                </button>
              )}
            </div>

            {tab.dropdown && dropdownIndex === index && (
              <ul className={dropdownClasses}>
                {tab.dropdown.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className={`hover:bg-gray-100 ${isMobile ? "pl-8" : ""}`}
                  >
                   {tab.label!=="Year"?
                    <Link
                      href={item.link}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                    : <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    >{item.label}</a>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
