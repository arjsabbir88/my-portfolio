import React from "react";
import { Meteors } from "./contactCardComponent";
import { FaLocationDot } from "react-icons/fa6";
import ShinyText from "@/Component/Welcome/AnimatedSubTitle/Animated";
import { IoTime } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export function ContactCard() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-[#edb24e] to-[#eca62c] blur-3xl" />
      <div className="w-full relative flex  flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4  py-3 shadow-xl">
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <FaLocationDot size={30} />
            <ShinyText
              text="Location!!"
              disabled={false}
              speed={3}
              className="custom-class text-base"
            ></ShinyText>
            <h1 className="relative z-50 text-xs md:text-base lg:text-xl font-bold text-white">
              Khilkhat,Dhaka,
            </h1>
            <ShinyText
              text="Bangladesh!!"
              disabled={false}
              speed={3}
              className="custom-class text-base"
            ></ShinyText>
          </div>
          <div>
            <IoTime size={30} />
            <ShinyText
              text="Available Time!!"
              disabled={false}
              speed={3}
              className="custom-class text-base"
            ></ShinyText>
            <h1 className="relative z-50 text-xs md:text-sm lg:text-xl font-bold text-white">
              Khilkhat,Dhaka,
            </h1>
            <h2 className="text-xs md:text-xs">
              Sunday - Friday 9:00am - 5:00pm
            </h2>
          </div>
          <div className="mt-10">
            <FaPhone size={30}/>
            <ShinyText
              text="Phone Number!!"
              disabled={false}
              speed={3}
              className="custom-class text-base"
            ></ShinyText>
            <h1 className="relative z-50 mb-4 text-xs md:text-sm lg:text-xl font-bold text-white">
              01817247388
            </h1>
          </div>
          <div className="mt-10">
            <MdAttachEmail size={30}/>
            <ShinyText
              text="Email!!"
              disabled={false}
              speed={3}
              className="custom-class text-base"
            ></ShinyText>
            <h1 className="relative z-50 mb-4 text-xs md:text-sm lg:text-xl font-bold text-white">
              arjsabbir88@gmail.com
            </h1>
          </div>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
