'use client'
import React from 'react'
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import app from "@/components/assests/images/app.svg";
import Image from 'next/image';

export default function App() {
  return (
    <motion.div
      className="w-full py-10"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 4.0, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true, amount: 0.2 }} // Runs only once per session
      style={{ willChange: "opacity, transform" }}
    >
      <div className="flex flex-col justify-center items-center gap-4 px-5 md:px-0">
        <h2 className="font-Euclid font-medium md:text-[40px] lg:text-[50px] text-[24px] text-center">
          And there’s so much more waiting for You!
        </h2>
        <p className="font-Poppins font-normal md:text-[18px] text-[16px] text-center">
          Get the Fitstyla app today and make getting dressed the easiest part
          of your day.
        </p>
        <Image
          src={app}
          alt="app_image"
          className="mt-12 md:w-[400px] w-[300px] lg:w-[510px]"
        />
        <Button />
      </div>
    </motion.div>
  );
}
