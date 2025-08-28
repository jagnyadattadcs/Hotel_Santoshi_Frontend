import React from 'react'

const FeedBackForm = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="w-full bg-opacity-70 flex flex-col justify-start items-center pl-20 pt-6 mb-5 mt-5">
        <h4 className="text-red-500 text-lg font-semibold italic">
          Hotel Santoshi
        </h4>
        <h2 className="text-2xl">GIVE YOUR FEEDBACK HERE</h2>
      </div>

      <div className='w-[80%] h-[400px] flex justify-center items-center m-auto rounded-lg shadow-lg p-5'>
        <form className='w-full h-full flex flex-col justify-center items-center gap-6'>
          <input type="text" required placeholder='Enter Your Name' className='w-[70%] h-10 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-500'/>
          <input type="text" required placeholder='Enter Your Profession' className='w-[70%] h-10 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-500'/>
          <input type="email" required placeholder='Enter Your Email' className='w-[70%] h-10 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-500'/>
          <textarea required placeholder='Enter Your Feedback' className='w-[70%] h-32 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-500'/>
          <button type='submit' className='w-[30%] h-10 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default FeedBackForm
