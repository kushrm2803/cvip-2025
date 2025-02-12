"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="https://www.iitrpr.ac.in/" className="flex-shrink-0">
              <Image
                src="/iitropar-logo.jpg"
                alt="Logo"
                className="h-8 w-auto md:h-10"
                width={100}
                height={40}
                priority
              />
            </Link>
            <Link
              href="/"
              className="text-xl md:text-3xl font-bold text-red-600"
            >
              CVIP 2025
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="custom-lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <div className="hidden custom-lg:block flex-grow">
            <Navbar isMobile={false} />
          </div>
        </div>

        {isMenuOpen && (
          <div className="custom-lg:hidden mt-4">
            <Navbar isMobile={true} closeMenu={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
