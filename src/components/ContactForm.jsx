import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section
      className="w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat flex flex-col md:flex-col items-center justify-center gap-12"
      style={{ backgroundImage: "url('/image-22.jpg')" }}
    >
      <div className="w-[90%] h-[80%] p-4 bg-white rounded-lg shadow-lg">
        <div className="w-full bg-opacity-70 flex flex-col justify-start pl-4 pt-4 mb-5 mt-5">
          <h4 className="text-red-500 text-lg font-semibold italic">
            Contact Us
          </h4>
          <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
        </div>

        <form className="w-full flex flex-col gap-6 m-auto">
          <div className="w-full flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full h-15 border-1 border-gray-300 p-3 focus:border-red-500 outline-none"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full h-15 border-1 border-gray-300 p-3 focus:border-red-500 outline-none"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Your Number"
                className="w-full h-15 border-1 border-gray-300 p-3 focus:border-red-500 outline-none"
              />
            </div>
            <textarea
              name="textarea"
              id="textarea"
              className="w-1/2 h-[10] p-4 border-1 border-gray-300 focus:border-red-500 outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Animated Button */}
          <motion.div
            className="relative w-40 h-12 m-auto border bg-red-500 text-white flex justify-center items-center rounded-2xl cursor-pointer overflow-hidden group"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { color: "#fff" }, // text white by default
              hover: { color: "#ef4444" }, // text red on hover
            }}
          >
            <button
              type="submit"
              className="relative z-10 font-semibold transition-colors duration-300 group-hover:text-red-500 cursor-pointer"
            >
              SEND MESSAGE
            </button>

            {/* Overlay */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl cursor-pointer"
              variants={{
                rest: { x: "-100%" }, // hidden by default
                hover: {
                  x: ["-100%", "0%", "5%", "0%"], // bounce in
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            />
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
