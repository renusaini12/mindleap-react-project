import { div } from "framer-motion/client";
import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";

const Testimonial = () => {
  const testimonial = [
    {
      name: "john Doe",
      location: "New york, NY",
      review:
        "This service has been life-changing for me.the mental wellness resources and personalized support have made ahuge difference in my daily life .Highly recommanded!",
      image: review1,
    },

    {
      name: "john Smith",
      location: "Los Angeles,CA",
      review:
        "I have tried many wellness programs ,but this one stands out.the expert webinars and one-on-one coaching have been incredible valuable. i fell more balacnced and focused and than ever before.",
      image: review2,
    },
  ];
  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            What Our Clients Say
          </h2>
          <p className=" text-lg mb-12 md:w-2/3 mx-auto">
            Hear from some of our satisfied clients about how our services have
            positively impacted their lives and well-being.
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonial.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top=0 left=0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-green-500" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt="reviewer image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
