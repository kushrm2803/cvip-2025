import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-black py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center mb-2">
          <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-0">
            <div className="mr-4">
              <Image
                src="/iitropar-logo.jpg"
                alt="College Logo"
                width={64}
                height={64}
                className="mb-2 md:mb-0"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                Indian Institute of Technology Ropar
              </h2>
              <p className="text-sm text-gray-600">
                Birla Seed Farms, Rupnagar, Punjab - 140001
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-2 mt-4">
          <Link href="/home" className=" hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className=" hover:text-gray-700">
            About Us
          </Link>
          <Link href="/contact" className=" hover:text-gray-700">
            Contact
          </Link>
          <Link href="/privacy-policy" className=" hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className=" hover:text-gray-700">
            Terms of Service
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mb-2">
          <Link href="https://www.instagram.com/college">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </Link>
          <Link href="https://www.facebook.com/college">
            <FaFacebookF className="text-2xl hover:text-blue-600" />
          </Link>
          <Link href="https://twitter.com/college">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </Link>
          <Link href="https://www.youtube.com/college">
            <FaYoutube className="text-2xl hover:text-red-600" />
          </Link>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Indian Institute of Technology, Ropar.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
