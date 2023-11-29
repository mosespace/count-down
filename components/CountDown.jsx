import React from "react";
import Image from "next/image";
function CountDown({ days, hours, minutes, seconds }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center lg:gap-4 gap-2 font-bold'>
        <div className='px-4 py-1 bg-black text-white flex flex-col items-center'>
          {days} <span className='text-xs'>days:</span>
        </div>
        <div className='px-4 py-1 bg-red-700 text-white flex flex-col items-center'>
          {hours} <span className='text-xs'>hours:</span>
        </div>
        <div className='px-4 py-1 bg-black text-white flex flex-col items-center'>
          {minutes} <span className='text-xs'>minutes:</span>
        </div>
        <div className='px-4 py-1 bg-red-700 text-white flex flex-col items-center'>
          {seconds} <span className='text-xs'>seconds:</span>
        </div>
      </div>
      <div className='flex flex-col items-center mt-8 gap-4 text-center'>
        <h3 className='font-bold'>Up to 50% OFF Code With Moses Courses</h3>
        <p className='lg:text-xs text-sm'>
          Hurry, Ends Soon! Some exclusions apply
        </p>
        <button className='place-items-center w-full lg:w-auto bg-red-700 text-white px-16 lg:py-1 py-2 shadow-xl text-lg'>
          View Courses
        </button>
      </div>
    </div>
  );
}

export default CountDown;
