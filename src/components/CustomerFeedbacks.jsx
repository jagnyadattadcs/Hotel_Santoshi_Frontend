import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const CustomerFeedbacks = () => {
  const feedbacks = [
    {
      name: "John Doe",
      img: "/testi-avatar-1.jpg",
      text: "The food was absolutely wonderful, from preparation to presentation, very pleasing.",
    },
    {
      name: "Jane Smith",
      img: "/testi-avatar-1.jpg",
      text: "Amazing service and delicious meals! I will definitely recommend this place to my friends.",
    },
    {
      name: "Michael Lee",
      img: "/testi-avatar-1.jpg",
      text: "The ambiance and the staff made my evening special. Will come again soon!",
    },
    {
      name: "Sarah Johnson",
      img: "/testi-avatar-1.jpg",
      text: "Quick delivery, excellent service, and tasty food. Highly recommended!",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === feedbacks.length - 1) {
          setTimeout(() => setCurrent(0), 2000); 
          return prev; 
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <section className="w-full h-auto flex flex-col items-center">
      <div className="w-full bg-opacity-70 flex flex-col justify-start pl-20 pt-6 mb-5 mt-5">
        <h4 className="text-red-500 text-lg font-semibold italic">
          Testimonials
        </h4>
        <h2 className="text-2xl">WHAT OUR CUSTOMER SAY</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>Lorem Ipsum has been the industry's stan</p>
      </div>

      {/* Carousel */}
      <div className="relative w-[88%] h-[450px] overflow-hidden px-10 py-5 mb-10">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -30 && current < feedbacks.length - 1) {
              setCurrent((prev) => prev + 1);
            } else if (info.offset.x > 30 && current > 0) {
              setCurrent((prev) => prev - 1);
            }
          }}
        >
          {feedbacks.map((fb, i) => (
            <div
              key={i}
              className="min-w-[700px] h-[400px] group bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center items-center"
            >
              <div className="font-bold text-4xl group-hover:text-red-500">
                <RiDoubleQuotesL />
              </div>
              <p className="text-gray-600 text-center mb-6 mt-6">"{fb.text}"</p>
              <div className="flex justify-center items-center">
                <div className="w-22 h-22 flex justify-center items-center border-1 border-gray-200 object-cover mr-4 p-1 rounded-full mb-4 group-hover:bg-red-500">
                  <img
                    alt={fb.name}
                    src={fb.img}
                    className="w-20 h-20 rounded-full bg-white"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700">{fb.name}</h4>
                  <p className="text-gray-500">Developer</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {feedbacks.slice(0, feedbacks.length - 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-red-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedbacks;
