import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-screen bg-[#282624] flex flex-col items-center pt-5">
      <div className='w-[90%] h-[100%] flex flex-col'>
        <div className='w-full h-25 flex items-center justify-center gap-4'>
            <div className='w-1/2 flex flex-col items-start gap-2'>
                <h2 className='text-white text-3xl font-bold'>Subcribe To our News Latter now!!</h2>
                <p className='text-gray-200 text-sm font-bold italic'>Some lorem ipsum subtitle here</p>
            </div>
            <div className='w-1/2 h-12 flex flex-row items-center justify-center rounded-md text-gray-200'>
                <input type="email" placeholder='Enter your email address' className='w-full h-full text-gray-200 p-2 pl-4 outline-none bg-[#2F2D2B]' />
                <button className='h-full bg-red-500 text-white px-6 rounded-tr-lg rounded-br-lg cursor-pointer'><RiMailSendLine className='text-2xl'/></button>
            </div>
        </div>
        <hr className='w-full border-gray-700'/>
        <div className='w-full h-[70%] flex flex-row items-center justify-between gap-2'>
            <div className='w-1/3 h-full flex flex-col items-start justify-start gap-4 p-3'>
                <h4 className='w-full text-white text-sm font-bold border-r-1 border-gray-700 text-center p-3'>ABOUT US</h4>
                <p className='text-start p-3 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the</p>
                <div className='w-fulle flex flex-col items-start justify-start gap-2 p-2'>
                    <p className='flex gap-2 items-center justify-center text-gray-400'><FaLocationDot className='text-red-500'/>Saheed Nagar, Bhubaneswar</p>
                    <p className='flex gap-2 items-center justify-center text-gray-400'><IoCall className='text-red-500'/> (732)803-0103, (732)806-0104</p>
                    <p className='flex gap-2 items-center justify-center text-gray-400'><TfiEmail className='text-red-500'/> info@hotelsantoshi.com</p>
                </div>
                <h3 className='text-sm text-white ml-2 font-bold'>OPENING HOURS</h3>
                <div className='w-full flex flex-col items-start justify-start gap-1 p-2'>
                    <p className='text-gray-400 text-sm'>Monday - Friday: 9:00 AM - 10:00 PM</p>
                    <p className='text-gray-400 text-sm'>Sunday: 10:00 AM - 07:00 PM</p> 
                    <p className='text-gray-400 text-sm'>Saturday: 10:00 AM - 04:00 PM</p> 
                </div>
            </div>
            <div className='w-1/3 h-full flex flex-col items-start justify-start gap-4 p-3'>
                <h4 className='w-full text-white text-sm font-bold border-r-1 border-gray-700 text-center p-3'>INSTA FEED</h4>
                
            </div>
            <div className='w-1/3 h-full flex flex-col items-start justify-start gap-4 p-3'>
                <h4 className='w-full text-white text-sm font-bold text-center p-3'>CONTACT FORM</h4>
                <input type="text" className='w-full p-4 bg-[#2F2D2B] outline-none text-white' placeholder='Name'/>
                <input type="text" className='w-full p-4 bg-[#2F2D2B] outline-none text-white' placeholder='Email'/>
                <textarea name="textarea" id="textarea" placeholder='Message' className='w-full h-35 p-4 bg-[#2F2D2B] outline-none text-white'></textarea>
                <div className='w-full flex justify-end items-center pr-6 mt-2'>
                    <button className='w-22 bg-red-500 p-3 text-white font-bold text-sm rounded-full cursor-pointer hover:bg-red-400'>SEND</button>
                </div>
            </div>
        </div>
        <hr className='w-full border-gray-700'/>
        <div className='w-full h-20 flex items-center justify-between'>
            <p className='text-gray-400 text-sm font-bold'>&copy; 2024 Hotel Santoshi. All Rights Reserved.</p>   
            <div className='w-1/2 flex items-center justify-end gap-4 pr-6'>
                <FaFacebookF className='w-8 h-8 rounded-full hover:bg-red-500 text-white p-2 border-1 border-gray-500 cursor-pointer transition ease-in-out duration-300'/>
                <FaInstagram className='w-8 h-8 rounded-full hover:bg-red-500 text-white p-2 border-1 border-gray-500 cursor-pointer transition ease-in-out duration-300'/>
                <FaYoutube className='w-8 h-8 rounded-full hover:bg-red-500 text-white p-2 border-1 border-gray-500 cursor-pointer transition ease-in-out duration-300'/>
                <FaTwitter className='w-8 h-8 rounded-full hover:bg-red-500 text-white p-2 border-1 border-gray-500 cursor-pointer transition ease-in-out duration-300'/>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
