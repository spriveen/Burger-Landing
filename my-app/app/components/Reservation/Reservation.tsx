import React from 'react';
import { BiPhone } from 'react-icons/bi';
import ReservationForm from './ReservationForm';

const Reservation = () => {
  return (
    <div
      className="relative pt-[5rem] mt-[2rem] pb-[5rem] mb-[3rem]"
    >
      {/* Text Content */}
      <div className="relative z-[20] w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
            Book a table now and enjoy a wonderful evening with great food and ambiance.
          </p>
          <div className='flex mt-[2rem] items-center space-x-4'>
            <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center
            flex-col'>
                <BiPhone className='w-[1.7rem] h-[1.7rem] text-white' />
            </div>
            <div>
                <h1 className='text-[25px] text-white font-semibold'> Quick order 24/7</h1>
                <h1 className='text-yellow-300 text-[30px] font-bold'>+94 71 456 5678</h1>
            </div>
          </div>
        </div>
        <ReservationForm />
      </div>

      {/* Background Image in Footer */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/bg-black.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000a6]"></div>
      </div>
    </div>
  );
};

export default Reservation;
