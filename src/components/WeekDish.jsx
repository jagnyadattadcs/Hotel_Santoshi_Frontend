import React, { useEffect, useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { RiCameraLensFill } from "react-icons/ri";

const WeekDish = () => {
  const scrollRef = useRef(null);

  const images = [
    "/thumb-img-1.jpg",
    "/thumb-img-2.jpg",
    "/thumb-img-3.jpg",
    "/thumb-img-1.jpg",
    "/thumb-img-2.jpg",
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: -200, behavior: "smooth" });

      // if at start → jump to end
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: 200, behavior: "smooth" });

      // if at end → jump back to start
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollLeft = 0;
      }
    }
  };
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center bg-[url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] bg-cover bg-fixed bg-center'>
      <div className="w-[64%] h-[75%] bg-white flex">
        <div className="w-1/2 h-[70%] ">
          <div className="w-full has-[400px] border-b-1 border-gray-300 p-4 pb-20">
            <h1 className="text-4xl font-bold text-center mt-8 italic text-red-500">
              Seirokom Grill
            </h1>
            <p className="text-center mt-4 font-bold text-sm text-black">
              DISH OF THE WEEK
            </p>
            <div className="w-full flex justify-center">
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
            <p className="text-justify mt-4 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s stan
            </p>
            <div className="flex items-center gap-1 mt-6 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>

          <div className="w-full h-[8.5rem] flex items-center justify-between relative">
            {/* Left button */}
            <button
              onClick={scrollLeft}
              className="w-[60px] h-full bg-white text-xl text-gray-500 border-r border-gray-300 hover:bg-gray-300 hover:text-white cursor-pointer"
            >
              {"<"}
            </button>

            {/* Thumbnails container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full"
            >
              {/* Duplicate images so loop feels infinite */}
              {[...images, ...images].map((src, i) => (
                <div
                  key={i}
                  className="group flex flex-col justify-center items-center relative cursor-pointer min-w-[100px]"
                >
                  <img
                    src={src}
                    alt="thumb"
                    className="rounded-full group-hover:rotate-90 transition duration-500 ease-in-out"
                  />
                  <div className="w-full h-full rounded-full group-hover:bg-white/30 absolute"></div>
                  <RiCameraLensFill className="absolute text-2xl text-red-500 opacity-0 scale-75 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-40" />
                </div>
              ))}
            </div>

            {/* Right button */}
            <button
              onClick={scrollRight}
              className="w-[60px] h-full bg-white text-xl text-gray-500 border-l border-gray-300 hover:bg-gray-300 hover:text-white cursor-pointer"
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/image-12.jpg" alt="cover img" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default WeekDish;
