"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  const tabs = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    {
      label: "Services",
      dropdown: [
        { label: "Web Development", link: "/services/web-development" },
        { label: "Mobile Development", link: "/services/mobile-development" },
        { label: "SEO Services", link: "/services/seo" },
      ],
    },
    {
      label: "Portfolio",
      dropdown: [
        { label: "Projects", link: "/portfolio/projects" },
        { label: "Case Studies", link: "/portfolio/case-studies" },
      ],
    },
    { label: "Blog", link: "/blog" },
    {
      label: "Resources",
      dropdown: [
        { label: "Documentation", link: "/resources/documentation" },
        { label: "Tutorials", link: "/resources/tutorials" },
      ],
    },
    { label: "Contact", link: "/contact" },
    {
      label: "More",
      dropdown: [
        { label: "FAQs", link: "/more/faqs" },
        { label: "Terms of Service", link: "/more/terms" },
        { label: "Privacy Policy", link: "/more/privacy" },
      ],
    },
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => tab.dropdown && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={tab.link || "#"}>
              <span className="flex items-center text-gray-800 hover:text-blue-600 font-medium">
                {tab.label}

                {tab.dropdown && (
                  <span className="ml-2">
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
                  </span>
                )}
              </span>
            </Link>

            {tab.dropdown && dropdownIndex === index && (
              <ul className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg py-2 z-10">
                {tab.dropdown.map((item, subIndex) => (
                  <li key={subIndex} className="hover:bg-gray-100">
                    <Link href={item.link}>
                      <span className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                        {item.label}
                      </span>
                    </Link>
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
