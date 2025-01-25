"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <Image
              src="/iitropar-logo.jpg"
              alt="Logo"
              className="h-10 w-auto"
              width={100}
              height={40}
            />
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
