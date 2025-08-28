import React from "react";
import { SiCodechef } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const OurTeam = () => {
  return (
    <section className="w-full h-auto relative overflow-hidden pt-15">
      <div className="w-full bg-opacity-70 flex flex-col justify-start pl-20 pt-6 mb-5">
        <h4 className="text-red-500 text-lg font-semibold italic">Our Team</h4>
        <h2 className="text-2xl">WHAT WE OFFER</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>Lorem Ipsum has been the industry's stan</p>
      </div>

      {/* our team  */}
      <div className="w-[98%] h-auto flex pl-20 pr-20 m-auto mb-20">
        <div className="group relative w-1/4 h-[26rem] border-2 border-white hover:border-red-400 rounded-md transition-all duration-500 ease-in-out">
          <img
            src="/team-img-4.jpg"
            alt=""
            className="w-[80%] h-auto text-center m-auto scale-90 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />

          {/* red overlay div */}
          <div
            className="absolute w-[80%] h-20 bg-red-400 opacity-70 left-1/2 -translate-x-1/2 bottom-11 
               flex justify-center items-center rounded-sm 
               transform transition-all duration-500 ease-in-out
               group-hover:-translate-y-18"
          >
            <SiCodechef className="text-4xl text-white" />
          </div>

          {/* cover div */}
          <div className="absolute w-full h-32 bottom-2 left-0 text-center border-none rounded-bl-md rounded-br-md bg-white p-2">
            <h4 className="text-lg font-semibold">Raj Mohanty</h4>
            <p className="text-sm">Master Chef</p>
            <div className="w-full flex justify-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 20"
                className="w-full h-3 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10" />
              </svg>
            </div>
            <div className="w-full h-10 flex justify-center items-center gap-4 mt-4">
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaFacebookF />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaTwitter />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <IoLogoGoogleplus />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group relative w-1/4 h-[26rem] border-2 border-white hover:border-red-400 rounded-md transition-all duration-500 ease-in-out">
          <img
            src="/team-img-3.jpg"
            alt=""
            className="w-[80%] h-auto text-center m-auto scale-90 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />

          {/* red overlay div */}
          <div
            className="absolute w-[80%] h-20 bg-red-400 opacity-70 left-1/2 -translate-x-1/2 bottom-11 
               flex justify-center items-center rounded-sm 
               transform transition-all duration-500 ease-in-out
               group-hover:-translate-y-18"
          >
            <SiCodechef className="text-4xl text-white" />
          </div>

          {/* cover div */}
          <div className="absolute w-full h-32 bottom-1 left-0 text-center border-none rounded-bl-md rounded-br-md bg-white p-2">
            <h4 className="text-lg font-semibold">Raj Mohanty</h4>
            <p className="text-sm">Master Chef</p>
            <div className="w-full flex justify-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 20"
                className="w-full h-3 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10" />
              </svg>
            </div>
            <div className="w-full h-10 flex justify-center items-center gap-4 mt-4">
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaFacebookF />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaTwitter />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <IoLogoGoogleplus />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group relative w-1/4 h-[26rem] border-2 border-white hover:border-red-400 rounded-md transition-all duration-500 ease-in-out">
          <img
            src="/team-img-2.jpg"
            alt=""
            className="w-[80%] h-auto text-center m-auto scale-90 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />

          {/* red overlay div */}
          <div
            className="absolute w-[80%] h-20 bg-red-400 opacity-70 left-1/2 -translate-x-1/2 bottom-11 
               flex justify-center items-center rounded-sm 
               transform transition-all duration-500 ease-in-out
               group-hover:-translate-y-18"
          >
            <SiCodechef className="text-4xl text-white" />
          </div>

          {/* cover div */}
          <div className="absolute w-full h-32 bottom-1 left-0 text-center border-none rounded-bl-md rounded-br-md bg-white p-2">
            <h4 className="text-lg font-semibold">Raj Mohanty</h4>
            <p className="text-sm">Master Chef</p>
            <div className="w-full flex justify-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 20"
                className="w-full h-3 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10" />
              </svg>
            </div>
            <div className="w-full h-10 flex justify-center items-center gap-4 mt-4">
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaFacebookF />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaTwitter />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <IoLogoGoogleplus />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group relative w-1/4 h-[26rem] border-2 border-white hover:border-red-400 rounded-md transition-all duration-500 ease-in-out">
          <img
            src="/team-img-1.jpg"
            alt=""
            className="w-[80%] h-auto text-center m-auto scale-90 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />

          {/* red overlay div */}
          <div
            className="absolute w-[80%] h-20 bg-red-400 opacity-70 left-1/2 -translate-x-1/2 bottom-11 
               flex justify-center items-center rounded-sm 
               transform transition-all duration-500 ease-in-out
               group-hover:-translate-y-18"
          >
            <SiCodechef className="text-4xl text-white" />
          </div>

          {/* cover div */}
          <div className="absolute w-full h-32 bottom-1 left-0 text-center border-none rounded-bl-md rounded-br-md bg-white p-2">
            <h4 className="text-lg font-semibold">Raj Mohanty</h4>
            <p className="text-sm">Master Chef</p>
            <div className="w-full flex justify-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 20"
                className="w-full h-3 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10" />
              </svg>
            </div>
            <div className="w-full h-10 flex justify-center items-center gap-4 mt-4">
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaFacebookF />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaTwitter />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <IoLogoGoogleplus />
              </div>
              <div className="w-6 h-6 p-1 bg-gray-500 rounded-full flex justify-center items-center text-white text-lg font-semibold cursor-pointer hover:bg-red-500">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* divider line */}
      <div className="w-full mt-6 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0,50 Q360,0 720,50 T1440,50" />
        </svg>
      </div>
      {/* side image  */}
      <div className="absolute w-40 h-20 bottom-115 -right-10">
        <img
          src="/side-img.png"
          alt="side-img png"
          className="w-full object-cover"
        />
      </div>

      {/* Reserve tab */}
      <div className="w-full h-80 p-10 flex items-center justify-center ">
        <div className="w-1/3 h-40 border-r-2 border-gray-400 text-black p-4 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold">
            MAKE <br />A <br />
            RESERVATION
          </h3>
        </div>
        <div className="w-2/3 h-40 text-black p-4 flex flex-wrap gap-6 justify-center items-center">
          <input
            type="text"
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            placeholder="Email"
            required
          />
          <input
            type="date"
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            placeholder="Date"
          />
          <input
            type="tel"
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            placeholder="Number"
            pattern="[0-9]{10}"
            required
          />
          <select
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            required
          >
            <option value="geust" selected text-gray-500>
              Guest
            </option>
            <option value="passenger">Passenger</option>
            <option value="resident">Resident</option>
          </select>
          <input
            type="text"
            className="w-56 border-1 border-gray-400 rounded-sm pt-2 pb-2 pl-4 pr-4 outline-none focus:border-red-500 text-gray-500"
            placeholder="Time"
            required
          />
          <div className="w-full flex justify-end mt-4 pr-15">
            <button className="w-[140px] h-10 border border-[#EF4836] hover:bg-[#EF4836] hover:text-white text-md rounded-3xl flex flex-row items-center z-20 transition duration-300 cursor-pointer font-semibold">
              <span className="ml-4">Send</span>
              <span className="w-12 h-10 ml-auto bg-[#EF4836] p-1 rounded-tr-2xl rounded-br-2xl text-white text-xl border-l hover:border-l-white flex justify-center items-center">
                <CiMail />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
