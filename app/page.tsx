"use Client"
import React from "react";
import Image from "next/image";




export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-yellow-200 p-8 rounded-lg shadow-lg max-w-2xl w-full flex flex-col md:flex-row items-center border-4 border-pink-300 relative">
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
            <Image
  src="/image/background.png"
  alt="Background image"
  width={400}
  height={200}
  style={{ objectFit: "cover" }}
  className="opacity-10"
/>

            </div>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-2/3 relative z-10 p-4">
            {/* Logo */}
            <img
  src="/image/logo.png"
  alt="card logo"
  className="w-16 h-16 mb-4 mx-left "
/>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Name:</strong>
              </span>
              <span className="text-black"> Dr Minahil Hamza </span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Roll Number:</strong>
              </span>
              <span className="text-black"> 00391802</span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Learning Distance:</strong>
              </span>
              <span className="text-black"> No</span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>City:</strong>
              </span>
              <span className="text-black"> Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Center:</strong>
              </span>
              <span className="text-black"> Governer House Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Campus:</strong>
              </span>
              <span className="text-black"> Main</span>
            </p>

            <p className="mb-2">
              <span className="text-purple-500">
                <strong>Days/Time:</strong>
              </span>
              <span className="text-black"> Monday-02:00pm - 5:00pm</span>
            </p>

            <p className="text-sky-500 font-bold mb-2">Batch 01</p>

            {/* Button Section */}
            <div className="mt-4">
              <button className="relative w-full p-2 rounded-lg border-gray-300 bg-blue-900 text-white flex items-center justify-center">
                <span className="absolute inset-0 bg-slate-500 w-1/2"></span>
                <span className="relative z-10">Q1 & WMD</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 text-center relative z-10 mt-6 md:mt-0">
          <Image
  src="/image/Minah.jpeg"
  alt="profile picture"
  width={200}
  height={200}
  className="rounded-lg mb-6 w-full"
/>
            <p className="border-t-2 border-purple-400 pt-2 font-bold text-sky-500 text-2xl">
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
