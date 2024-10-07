import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center border-4 border-sky-300 relative">
          {/* background Images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
              <Image
                src="/image/public/Background.png"
                alt="background image"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="opacity-10"
              />
            </div>
          </div>

          {/* Left Section */}
          <div className="w-2/3 pr-4 pt-16 relative z-10">
            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Name:</strong>
              </span>
              <span className="text-black"> Dr Minahil Ashraf</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
