import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircle } from "react-icons/io5";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-950 text-white flex items-center pt-28 md:h-screen "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 gap-12 h-full">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-secondary font-bold mb-4 leading-snug">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="text-lg mb-8">
            We lower our levels,we get to know our pain,we connect better,we
            improve our focus,and we're kinder to ourselves.Let us walk you
            through the basics in our new mindful guide on how to meditate.
          </p>
          <button className="bg-green-500 text-white p-3.5 px-8 font-medium rounded-md hover:bg-green-600 transition duration-300">
            <a
              href="#contact"
              className="flex gap-2 items-center justify-center"
            >
              <span>Get Started</span>
              <IoArrowForwardCircle size={24} />
            </a>
          </button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <img
            src={heroImg}
            alt="Meditation illustration"
            className="w-[50%] object-cover rounded-lg  "
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
