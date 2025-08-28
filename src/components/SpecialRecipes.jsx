import React from "react";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiChefHatFill } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";

const SpecialRecipes = () => {
  return (
    <section
      className="w-full h-auto bg-fixed bg-center bg-cover bg-no-repeat flex flex-col md:flex-col items-center justify-center gap-12"
      style={{ backgroundImage: "url('/image-1.jpg')" }}
    >
      <div className="w-full h-[20rem] bg-white bg-opacity-70 flex flex-col justify-start pl-6 pt-6">
        <h4 className="text-red-500 text-lg font-semibold italic">
          Special Recipes
        </h4>
        <h2 className="text-2xl">TASTE OF PRECIOUS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>Lorem Ipsum has been the industry's stan</p>
      </div>

      <div className="w-full h-[60rem] bg-transparent flex items-center justify-center">
        <div className="w-10/12 h-[80.1rem] bg-white bg-opacity-70 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-gray-500 z-50">
          {/* Card 1 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-7.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>
          {/* Price 1 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-5.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>

          {/* Price 2 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>

          {/* Card 3 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-6.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>

          {/* Price 3 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>

          {/* Card 4 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-4.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>

          {/* Price 4 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>

          {/* Card 5 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-21.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>

          {/* Price 5 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>

          {/* Card 6 */}
          <div className="relative w-full h-80 bg-white flex flex-col items-center justify-center  group overflow-hidden cursor-pointer">
            <img
              src="/image-31.jpg"
              alt="Recipe 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] scale-100 group-hover:scale-120"
            />
            <div className="w-full h-full bg-red-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
            <TbToolsKitchen2 className="absolute text-white w-10 h-10 border-2 rounded-md p-2 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
          </div>

          {/* Price 6 */}
          <div className="w-full h-80 bg-white flex flex-col items-center justify-start p-4 gap-2">
            <PiChefHatFill className="text-2xl" />
            <h3 className="text-xl font-semibold mt-2">Recipe Title</h3>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <h4 className="text-red-500 text-lg font-semibold italic">$2.65</h4>
            <button className="text-xs font-bold border-1 border-red-500 rounded-2xl pt-2 pl-6 pr-6 pb-2 mt-4 hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-700 ease-in-out">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] bg-white flex items-center justify-center">
        {/* <h2 className="text-black text-3xl font-bold">Our Menu</h2> */}
      </div>
    </section>
  );
};

export default SpecialRecipes;
