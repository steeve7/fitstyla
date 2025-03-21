'use client'
import React from 'react'
import { motion } from 'framer-motion';

export default function Download() {
  return (
    <motion.div
      className="relative flex flex-col justify-center items-center w-full py-24"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 3.5, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true, amount: 0.2 }} // Runs only once per session
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large screens */}
        <div className="hidden lg:flex justify-center items-center md:block absolute inset-0">
          <img
            src="/images/largescreen.svg"
            alt="bg_image"
            className="w-[1100px] h-full"
          />
        </div>
        {/* Small screens */}
        <div className="lg:hidden md:hidden absolute inset-0 flex justify-center items-center lg:px-0 px-3">
          <img
            src="/images/mobile.svg"
            alt="gross2_image"
            className="w-full h-[449.5px]"
          />
        </div>
      </div>
      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mt-10 md:w-1/2 lg:w-3/4 w-full gap-6">
        <div className="flex-1 lg:w-1/2 w-full xl:px-3 md:px-2 px-[42px] md:-mt-32">
          <h2 className="font-Euclid font-medium text-[24px] md:text-[50px] lg:text-[60px] leading-[32px] md:leading-[60px] lg:leading-[72px] md:w-[300px] lg:w-[400px] w-full text-white">
            Smart styling with AI
          </h2>
          <p className="font-Poppins text-[16px] md:text-[14px] lg:text-[18px] font-medium leading-[24px] md:leading-[20px] lg:leading-[28px] md:w-[300px] lg:w-[400px] w-full text-white">
            Get outfit suggestions curated for your style. Fitstyla’s AI learns
            your preferences, wardrobe, and fashion goals to recommend looks
            that fit every occasion and vibe.
          </p>
        </div>
        <div className="flex-shrink-0 xl:mt-[75px] lg:mt-[38px] md:-mb-3 mt-10 lg:mb-0">
          <img
            src="/images/smart.svg"
            alt="grocery_image"
            className="w-full max-w-[280px] md:max-w-[330px] lg:max-w-md object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
