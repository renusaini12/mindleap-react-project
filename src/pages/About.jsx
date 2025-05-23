import { div } from "framer-motion/client";
import React, { useState } from "react";
import thumbnail from "../assets/video-thumbnail.webp";
import { IoPlay } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleacloseVideo = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                {" "}
                <img
                  src={thumbnail}
                  alt=""
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="size=12 text-white" />
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/* right side */}
          <div className="md:w-1/2 w-full">
            {" "}
            <h2 className="text-4xl capitalize font-secondary font-bold mb-4 leading-snug">
              individual consult and therapy
            </h2>
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
        </div>
        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4V0CwzEP_ps?si=scm37rl0FBJPFWFp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-lg"
              ></iframe>
              <button
                onClick={handleacloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              ></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
