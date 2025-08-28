import React from "react";

const About = () => {
  return (
    <section
  id="#about-us"
  className="w-full h-screen bg-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12"
>
  {/* Left Image Section */}
  <div className="flex-1 flex justify-center">
    <img
      src="/about-us-image.png" // <-- Replace with your image
      alt="Delicious Food"
      className="rounded-full shadow-lg w-80 md:w-96 h-80 md:h-96 object-cover"
    />
  </div>

  {/* Right Text Section */}
  <div className="flex-1 text-center md:text-left">
    <h4 className="text-red-500 text-lg font-semibold mb-2 italic">
      About Us
    </h4>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      WE ARE TASTY
    </h2>
    <div className="w-20 h-[2px] bg-gray-400 mb-6 mx-auto md:mx-0"></div>
    <p className="text-gray-600 mb-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's stan
    </p>
    <p className="text-gray-600 mb-6">
      dard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting.
    </p>
    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:opacity-90 transition">
      READ MORE
    </button>
  </div>
  
</section>

  );
};

export default About;
