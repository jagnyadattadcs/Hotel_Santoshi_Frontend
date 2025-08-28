import React from "react";
import { ImGlass } from "react-icons/im";
import { RiCameraLensFill } from "react-icons/ri";
import { GiChickenOven } from "react-icons/gi";
import { MdLunchDining } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";

const OurService = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full bg-white bg-opacity-70 flex flex-col justify-start pl-20 pt-6 mb-5">
        <h4 className="text-red-500 text-lg font-semibold italic">
          our services
        </h4>
        <h2 className="text-2xl">WHAT WE OFFER</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>Lorem Ipsum has been the industry's stan</p>
      </div>

      <div className="w-full flex h-[35rem]  pl-20 pr-20">
        <div className="group w-1/4 h-full p-4 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="relative w-full flex justify-center items-center">
            {/* Image */}
            <img
              src="/image-11-226x223.jpg"
              alt="image"
              className="w-[80%] rounded-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 w-[80%] mx-auto rounded-full bg-white opacity-0 group-hover:opacity-50 scale-110 transition-opacity duration-500 ease-in-out"></div>

            {/* Circle Icon */}
            <RiCameraLensFill className="absolute text-4xl text-red-500 opacity-0 scale-75 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-40" />
          </div>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <h4 className="w-full text-center flex justify-center font-bold mt-4">
            <ImGlass className="text-xl text-center text-red-500 mr-1" />
            OTHERS
          </h4>

          <p className="mt-2 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry been the industry’s stan
          </p>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <a
            href="#"
            className="group/link inline-flex items-center text-sm text-red-500 font-medium mt-2"
          >
            LEARN MORE
            <span className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-2">
              {">"}
            </span>
          </a>
        </div>    
        <div className="group w-1/4 h-full p-4 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="relative w-full flex justify-center items-center">
            {/* Image */}
            <img
              src="/image-10-226x223.jpg"
              alt="image"
              className="w-[80%] rounded-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 w-[80%] mx-auto rounded-full bg-white opacity-0 group-hover:opacity-50 scale-110 transition-opacity duration-500 ease-in-out"></div>

            {/* Circle Icon */}
            <RiCameraLensFill className="absolute text-4xl text-red-500 opacity-0 scale-75 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-40" />
          </div>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <h4 className="w-full text-center flex justify-center font-bold mt-4">
            <GiChickenOven className="text-xl text-center text-red-500 mr-1" />
            DINNER
          </h4>

          <p className="mt-2 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry been the industry’s stan
          </p>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <a
            href="#"
            className="group/link inline-flex items-center text-sm text-red-500 font-medium mt-2"
          >
            LEARN MORE
            <span className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-2">
              {">"}
            </span>
          </a>
        </div> 
        <div className="group w-1/4 h-full p-4 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="relative w-full flex justify-center items-center">
            {/* Image */}
            <img
              src="/image-11-226x223.jpg"
              alt="image"
              className="w-[80%] rounded-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 w-[80%] mx-auto rounded-full bg-white opacity-0 group-hover:opacity-50 scale-110 transition-opacity duration-500 ease-in-out"></div>

            {/* Circle Icon */}
            <RiCameraLensFill className="absolute text-4xl text-red-500 opacity-0 scale-75 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-40" />
          </div>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <h4 className="w-full text-center flex justify-center font-bold mt-4">
            <MdLunchDining className="text-xl text-center text-red-500 mr-1" />
            LUNCH
          </h4>

          <p className="mt-2 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry been the industry’s stan
          </p>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <a
            href="#"
            className="group/link inline-flex items-center text-sm text-red-500 font-medium mt-2"
          >
            LEARN MORE
            <span className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-2">
              {">"}
            </span>
          </a>
        </div> 
        <div className="group w-1/4 h-full p-4 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="relative w-full flex justify-center items-center">
            {/* Image */}
            <img
              src="/image-8-226x223.jpg"
              alt="image"
              className="w-[80%] rounded-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 w-[80%] mx-auto rounded-full bg-white opacity-0 group-hover:opacity-50 scale-110 transition-opacity duration-500 ease-in-out"></div>

            {/* Circle Icon */}
            <RiCameraLensFill className="absolute text-4xl text-red-500 opacity-0 scale-75 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-40" />
          </div>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <h4 className="w-full text-center flex justify-center font-bold mt-4">
            <MdFreeBreakfast className="text-xl text-center text-red-500 mr-1" />
            BREAKFAST
          </h4>

          <p className="mt-2 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry been the industry’s stan
          </p>

          <hr className="w-full border-gray-600 mx-auto my-6" />

          <a
            href="#"
            className="group/link inline-flex items-center text-sm text-red-500 font-medium mt-2"
          >
            LEARN MORE
            <span className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-2">
              {">"}
            </span>
          </a>
        </div>    
      </div>
    </section>
  );
};

export default OurService;
