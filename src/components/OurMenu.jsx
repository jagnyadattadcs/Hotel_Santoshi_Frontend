import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { SiCodechef } from "react-icons/si";

const OurMenu = () => {
  return (
    <section className='w-full h-auto bg-[#FFFAE4] relative overflow-hidden pb-20'>
      <div className="w-full bg-opacity-70 flex flex-col justify-start pl-20 pt-6 mb-5">
        <h4 className="text-red-500 text-lg font-semibold italic">
          Our Menu
        </h4>
        <h2 className="text-2xl">WHAT WE OFFER</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>Lorem Ipsum has been the industry's stan</p>
      </div>

      {/* Image section  */}
      <div className='absolute top-1/3 left-5/5 transform -translate-x-1/2 -translate-y-1/2 w-full h-[30rem] flex justify-center items-center gap-6 px-20 ml-20 z-0'>
        <img src="/image-1.png" alt="menu1" />
      </div>
      <div className='absolute top-6/7 transform -translate-x-1/2 -translate-y-1/2 w-full h-[30rem] flex justify-center items-center gap-6 ml-40 z-0'>
        <img src="/image-2.png" alt="menu2" />
      </div>

      {/* Menu Section */}
      <div className='relative w-[80%] h-auto flex justify-center items-center pl-20 pr-20 m-auto mt-10 mb-10 z-10'>
        <div className='w-1/3 h-auto flex flex-col items-center justify-center gap-4'>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <GiCoffeeCup className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto border-r-1 border-gray-300 flex flex-col justify-center items-center pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− SOUP −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <hr className="w-full border-gray-600 mx-auto my-6" />
            </div>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <GiCoffeeCup className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto border-r-1 border-gray-300 flex flex-col justify-center items-center pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− SOUP −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
            </div>
        </div>
        <div className='w-1/3 h-auto flex flex-col items-center justify-center'>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <RiDrinks2Fill className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto border-r-1 border-gray-300 flex flex-col justify-center items-center pl-4 pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− DRINKS −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <hr className="w-full border-gray-600 mx-auto my-6" />
            </div>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <GiCoffeeCup className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto border-r-1 border-gray-300 flex flex-col justify-center items-center pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− SOUP −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                {/* <hr className="w-full border-gray-600 mx-auto my-6" /> */}
            </div>
        </div>
        <div className='w-1/3 h-auto flex flex-col items-center justify-center  '>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <SiCodechef className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-center pl-4 pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− PIZZA −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <hr className="w-full border-gray-600 mx-auto my-6" />
            </div>
            <div className='w-12 h-12 rounded-full border-1 border-gray-200 flex justify-center items-center p-1'>
                <SiCodechef className='w-full h-full text-2xl text-white bg-[#EF4836] p-2 rounded-full'/>
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-center pl-4 pr-4'>
                <h4 className='text-md font-semibold mt-2 text-center text-[#EF4836] '>− PIZZA −</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text.</p>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4>
                <h4 className='font-semibold text-center mt-6'>Here will be food name</h4>
                {/* <h4 className="text-red-500 text-lg font-semibold italic mt-2">$2.65</h4> */}
            </div>
        </div>
      </div>
      <div className='w-full m-auto flex justify-center z-15'>
        <button className='w-40 border-1 border-[#EF4836] hover:bg-[#EF4836] hover:text-white text-sm rounded-4xl flex flex-row justify-end items-center gap-3 z-20 transition duration-300 cursor-pointer font-semibold'>FULL MENU <span className='w-[30%] bg-[#EF4836] p-1 rounded-tr-2xl rounded-br-2xl text-white text-xl border-l-1 hover:border-l-white'>{">"}</span></button>
      </div>
    </section>
  )
}

export default OurMenu
