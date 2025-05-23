import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import footerlogo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <img
              src={footerlogo}
              alt="MindLeap"
              className="w-[50%] h-15 mr-2"
            />
          </h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-green-600 hover:text-green-800 cursor-pointer text-lg" />
            <FaTwitter className="text-green-600 hover:text-green-800 cursor-pointer text-lg" />
            <FaInstagram className="text-green-600 hover:text-green-800 cursor-pointer text-lg" />
            <FaLinkedinIn className="text-green-600 hover:text-green-800 cursor-pointer text-lg" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About Us</li>
            <li className="hover:text-green-600 cursor-pointer">Services</li>
            <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="hover:text-green-600 cursor-pointer">FAQ</li>
            <li className="hover:text-green-600 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Support Center
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">Contact Info</h3>
          <ul className="mt-2 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" /> 123 Street, City,
              Country
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" /> info@company.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
