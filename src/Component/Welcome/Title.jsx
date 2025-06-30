"use client";
import React from "react";
import { SparklesCore } from "./TitleComponent";
import AnimatedText from "./TitleAnimated/AnimatedText";
import ShinyText from "./AnimatedSubTitle/Animated";

export function Title() {


  return (
    <div
      className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="text-4xl font-bold italic ">Hi&apos;I am</h3>
      <h1
        className="md:text-7xl text-3xl lg:text-8xl font-bold text-center relative z-20 place-self-center text-white text-[clamp(2em,10vw,10em)] font-[exo] bg-gradient-to-r from-orange-500 via-orange-300-300 to-orange-500-500 bg-[length:200%_100%] bg-clip-text animate-shimmer">
       
        <AnimatedText/>
        
      </h1>
      
      <ShinyText text="MERN Stack Developer!" disabled={false} speed={3} className='custom-class' />
      <div className="w-[40rem] h-40 relative">
        
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

    <style>
        {`
          @keyframes shimmer {
            to {
              background-position: 100%;
            }
          }

          .animate-shimmer {
            animation: shimmer 2s linear infinite;
          }
        `}
      </style>
      
    </div>
  );
}
