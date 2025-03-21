'use client'
import React from 'react'
import Button from '../ui/Button';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="w-full flex flex-col justify-center items-center gap-10 py-10 md:px-0"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true }} // Runs only once per session
    >
      <div className="w-[142px]">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="md:w-[713px] w-full flex flex-col justify-center items-center px-2">
        <img src="/images/hero.svg" alt="hero_image" className="" />
        <h2 className="font-medium text-[36px] font-Euclid mt-5 text-center">
          Your personal AI stylist & digital wardrobe
        </h2>
        <p className="font-normal text-[18px] font-Poppins text-center mt-2">
          No more ‘I don’t know what to wear’ moments! With Fitstyla, you can
          organise your closet, get AI-powered outfit ideas, plan looks, and
          refine your personal style.
        </p>
        <Button />
      </div>
    </motion.header>
  );
}
