import React, { useState, useEffect } from "react";
import img1 from "/image-1.jpg";
import img2 from "/image-2.jpg";
import img3 from "/image-3.jpg";
import {
  InformationCircleIcon,
  BookOpenIcon,
  MenuIcon,
  UsersIcon,
  CalendarIcon,
  ClockIcon,
  ChatIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/react/outline";

const Home = () => {
  // State for current slide index and mobile menu
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState('about-us');

  // Array of slide data
  const slides = [
    {
      image: img1,
      title: "We Serve Quality Food",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 1500s.",
    },
    {
      image: img2,
      title: "Fresh Ingredients Daily",
      description:
        "We source the finest ingredients to create exceptional dishes that delight your palate and nourish your body.",
    },
    {
      image: img3,
      title: "Exquisite Dining Experience",
      description:
        "Enjoy an atmosphere of elegance and comfort while our attentive staff ensures your dining experience is unforgettable.",
    },
  ];

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  // Toggle dropdown
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Handle menu item click
  const handleMenuItemClick = (itemId) => {
    setActiveItem(itemId);
    setActiveDropdown(null);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-10 right-10 z-10 p-2 shadow-lg border-2 border-gray-300 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-50 shadow-lg transform transition-transform duration-700 z-60 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-4 p-1 text-gray-500 hover:text-red-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="p-6 mt-8 overflow-y-auto h-full pb-20 bg-gray-900">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/hotel-logo.png"
              alt="Hotel Logo"
              className="h-24 w-full object-fit mix-blend-screen"
            />
          </div>

          <ul className="space-y-2">
            <li className="scroll about-us-link">
              <a
                title="About Us"
                href="#about-us"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "about-us"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("about-us")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About Us
              </a>
            </li>

            <li className="scroll special-recipes-link">
              <a
                title="Special Recipes"
                href="#special-recipes"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "special-recipes"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("special-recipes")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Special Recipes
              </a>
            </li>

            <li className="scroll our-menu-link">
              <a
                title="Our Menu"
                href="#our-menu"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "our-menu"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("our-menu")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Our Menu
              </a>
            </li>

            <li className="scroll team-link">
              <a
                title="Team"
                href="#our-team"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "team"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("team")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Team
              </a>
            </li>

            <li className="scroll book-a-table-link">
              <a
                title="Book a Table"
                href="#make-reservation"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "book-table"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("book-table")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Book a Table
              </a>
            </li>

            <li className="scroll dish-of-week-link">
              <a
                title="Dish of the Week"
                href="#dish-of-week"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "dish-of-week"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("dish-of-week")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Dish of the Week
              </a>
            </li>

            <li className="scroll testimonials-link">
              <a
                title="Testimonials"
                href="#testimonials"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "testimonials"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("testimonials")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                Testimonials
              </a>
            </li>

            <li className="scroll blog-link dropdown">
              <div
                className={`flex justify-between items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "blog"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div
                  className="flex items-center flex-grow cursor-pointer"
                  onClick={() => handleMenuItemClick("blog")}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <span>Blog</span>
                </div>
                <button
                  onClick={() => toggleDropdown("blog")}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "blog" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {activeDropdown === "blog" && (
                <ul className="pl-10 mt-1 space-y-1">
                  <li className="scroll">
                    <a
                      title="Blog"
                      href="#"
                      className="flex items-center py-2 px-4 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => handleMenuItemClick("blog-main")}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Blog
                    </a>
                  </li>
                  <li className="scroll">
                    <a
                      title="Blog Single"
                      href="#"
                      className="flex items-center py-2 px-4 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => handleMenuItemClick("blog-single")}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Blog Single
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="scroll contact-section-link">
              <a
                title="Contact us"
                href="#contact-section"
                className={`flex items-center py-3 px-4 rounded transition-colors ${
                  activeItem === "contact"
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuItemClick("contact")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Slider Container */}
      <div className="relative h-full w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-3000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Logo */}
          <div className="mb-6 w-72 h-28 relative">
            <img
              src="/hotel-logo-1.png"
              alt="Hotel Logo"
              className="w-full h-full object-contain mix-blend-screen"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-bold uppercase mb-4">
            {slides[currentSlide].title}
          </h1>

          {/* Divider Line */}
          <div className="w-64 md:w-96 h-1 bg-white mb-4 mx-auto"></div>

          {/* Description */}
          <p className="text-md md:text-xl max-w-2xl mb-8 italic">
            {slides[currentSlide].description}
          </p>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
