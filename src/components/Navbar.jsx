import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import footerlogo from "../assets/footer-logo.svg";

const Navbar = () => {
  const navlinks = (
    <ul className="flex space-x-6 gap-8 ">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleacloseMenu();
            handleScrollTo("home");
          }}
        >
          Home
        </motion.a>
      </li>

      <li>
        <a href="#services">Services</a>
        {/* <Link to="about" className="hover:text-green-500">
          About
        </Link> */}
      </li>
      <li>
        <a href="#about">About Us</a>

        {/* <Link to="services" className="hover:text-green-500">
          Services
        </Link> */}
      </li>
      <li>
        <a href="#pricing">Pricing</a>
        {/* <Link to="pricing" className="hover:text-green-500">
          Pricing
        </Link> */}
      </li>
      <li>
        <a href="#testimonial">Testimonial</a>
        {/* <Link to="testimonial" className="hover:text-green-500">
          Testimonial
        </Link> */}
      </li>
    </ul>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleacloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const section = ["home", "service", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;

    section.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollTo = (target) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <header className="bg-gray-700 text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex items-center h-full">
          {/* Logo */}
          <div className="text-white font-bold  filter brightness-0 invert">
            {/* <h2 className="text-2xl">Mindleap</h2> */}
            <img
              src={footerlogo}
              alt="MindLeap"
              className="w-[50%] h-15 mr-2"
            />{" "}
          </div>

          {/* Navigation Items */}
          <div className="m-auto">
            <nav className="hidden md:flex flex-grow justify-center">
              {navlinks}
            </nav>
          </div>

          {/* button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Contact
            </Link>
          </div>
          {/* Hamburger Menu (Mobile Only) */}
          <div className="block sm:block md:hidden">
            <button
              onClick={handleToggle}
              className={
                'text-white focus:outline-none ${isOpen ? "bordr border-white":""}'
              }
            >
              <HiMenuAlt3 className="size-6" />
            </button>
          </div>
        </div>

        {/* mobaile nav items */}
        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 flex flex-col space-y-4 text-center">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                {/* <Link
                  to="/"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link> */}
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                {/* <Link
                  to="/about"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link> */}
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                {/* <Link
                  to="/services"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link> */}
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                {/* <Link
                  to="/pricing"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link> */}
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonial
                </a>
                {/* <Link
                  to="/testimonial"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonial
                </Link> */}
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
