import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-gray-800 flex items-center justify-center py-28 px-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          {/* Left Side */}
          <div className="col-span-6">
            <h2 className="text-4xl font-bold font-secondary mb-6 text-white">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                    <FaUserAlt className="text-green-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">24 Hours Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas inventore dolore maiores consequuntur delectus
                      assumenda.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-xl rounded-md col-span-6 p-6 ml-0 md:ml-20">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Book Appointment
            </h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
